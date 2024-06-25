const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  const newUsername = username + Math.floor(Math.random() * 100); // Rastgele bir sayı ekleyerek benzersiz bir kullanıcı adı oluşturabilirsiniz
  console.log(`Kullanıcıyı kimlik doğrulama işlemi başlatılıyor: ${newUsername}`);  try {
    const response = await axios.post(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "5eee01ca-76bf-4ef4-b341-beccf2a91085" } }
    );
    console.log(`Kullanıcı doğrulandı: ${username}`);
    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API hatası:", error.response.data);
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error("Sunucudan yanıt alınamadı:", error.request);
      return res.status(500).json({ error: "Sunucudan yanıt alınamadı" });
    } else {
      console.error("Hata:", error.message);
      return res.status(500).json({ error: error.message });
    }
  }
});

app.listen(3211, () => {
  console.log("Sunucu 3211 portunda çalışıyor");
});
