import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, `☁️ Ingresa un link de YouTube válido.`, m);
  }
  await m.react('🕓');

  const apiUrls = [
    `https://axeel.my.id/api/download/audio?url=${text}`,
    `https://restapi.apibotwa.biz.id/api/ytmp3?url=${text}`,
    `https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${text}`
  ];

  let downloadUrl = null;
  let title = "Archivo de YouTube";

  for (const apiUrl of apiUrls) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.log(`⚠️ Respuesta no válida de la API: ${apiUrl}`);
        continue;
      }

      const json = await response.json();

      if (apiUrl.includes('axeel.my.id') && json.metadata?.url) {
        title = json.metadata.title || "Archivo MP3";
        downloadUrl = json.metadata.url;
        break;
      } else if (apiUrl.includes('apibotwa.biz.id') && json.status && json.result?.download?.url) {
        title = json.result.metadata.title || "Archivo MP3";
        downloadUrl = json.result.download.url;
        break;
      } else if (apiUrl.includes('deliriussapi-oficial') && json.status && json.data?.download?.url) {
        title = json.data.download.filename || "Archivo MP3";
        downloadUrl = json.data.download.url;
        break;
      } else {
        console.log(`⚠️ Respuesta inválida de la API: ${apiUrl}`);
      }
    } catch (error) {
      console.log(`⚠️ Error al procesar la API ${apiUrl}:`, error.message);
    }
  }

  if (!downloadUrl) {
    await m.react('❌');
    return conn.reply(m.chat,`⚠️ No se pudo obtener el audio. Por favor, verifica el enlace o inténtalo más tarde.`,m);
  }

  try {
    const audioResponse = await fetch(downloadUrl);
    if (!audioResponse.ok || audioResponse.headers.get('content-length') < 10000) {
    }

    await m.react('✅');
    await conn.sendMessage(m.chat,
      {
        audio: { url: downloadUrl },
        fileName: `${title}.mp3`,
        mimetype: 'audio/mpeg',
      },
      { quoted: m }
    );
  } catch (error) {
    console.log(`⚠️ Error al enviar el audio:`, error.message);
    await m.react('❌');
    conn.reply(m.chat, `⚠️ Ocurrió un error al enviar el audio descargado.`, m);
  }
};

handler.help = ['ytmp3 *<url>*'];
handler.tags = ['dl'];
handler.command = ['ytmp3'];
