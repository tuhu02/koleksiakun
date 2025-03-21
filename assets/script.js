fetch('akun/akun.json')
  .then(response => response.json())
  .then(data => {
    let akunList = document.getElementById("akun-list");
    akunList.innerHTML = "";

    data.forEach(akun => {
      if (akun.status === "tersedia") {
        akunList.innerHTML += `
          <div class="akun-item">
            <img src="${akun.gambar}" alt="${akun.game}">
            <h3>${akun.game} - Level ${akun.level}</h3>
            <p>${akun.deskripsi}</p>
            <p><strong>Harga: Rp${akun.harga}</strong></p>
            <button onclick="beliAkun(${akun.id})">Beli</button>
          </div>
        `;
      }
    });
  });

function beliAkun(id) {
  alert("Silakan hubungi admin untuk membeli akun ID " + id);
}
