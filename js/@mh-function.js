// Watermark
Array.from(document.querySelectorAll(".watermarked")).forEach(function (el) {
  el.dataset.watermark = (el.dataset.watermark + " ").repeat(10000);
});

function toastify_sukses(teks = "Berhasil Di Simpan") {
  Toastify({
    text: teks,
    duration: 3000, // Waktu tampilan dalam milidetik (misalnya, 3000 untuk 3 detik)
    close: true, // Menampilkan tombol close
    gravity: "top", // Posisi toast (top, bottom, left, right)
    position: "right", // Posisi horizontal (center, left, right)
    stopOnFocus: true, // Berhenti ketika elemen yang memiliki fokus
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function toastify_gagal(teks = "Gagal Di Simpan") {
  Toastify({
    text: teks,
    duration: 3000, // Waktu tampilan dalam milidetik (misalnya, 3000 untuk 3 detik)
    close: true, // Menampilkan tombol close
    gravity: "top", // Posisi toast (top, bottom, left, right)
    position: "right", // Posisi horizontal (center, left, right)
    stopOnFocus: true, // Berhenti ketika elemen yang memiliki fokus
    style: {
      background:
        "linear-gradient(to right, #dc86a8, #e3729f, #e95c95, #ee408a, #f2007f)",
    },
  }).showToast();
}

function toastify_info(teks = "Info") {
  Toastify({
    text: teks,
    duration: 3000, // Waktu tampilan dalam milidetik (misalnya, 3000 untuk 3 detik)
    close: true, // Menampilkan tombol close
    gravity: "top", // Posisi toast (top, bottom, left, right)
    position: "right", // Posisi horizontal (center, left, right)
    stopOnFocus: true, // Berhenti ketika elemen yang memiliki fokus
    style: {
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    },
  }).showToast();
}

function swal_berhasil(teks = "Berhasil Di Simpan") {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: teks,
    showConfirmButton: false,
    timer: 5000,
  });
}
function swal_salah(teks = "Tidak Berhasil") {
  Swal.fire({
    position: "top-center",
    icon: "error",
    title: "Maaf... !!!",
    showConfirmButton: false,
    timer: 5000,
    html: "<div style='text-align:center;'>" + teks + "</div>",
    // footer: '<a href="">Why do I have this issue?</a>'
  });
}

function swal_info(teks = "Info") {
  Swal.fire({
    position: "top-center",
    icon: "info",
    title: "Info !!!",
    showConfirmButton: false,
    timer: 5000,
    html: "<div style='text-align:center;'>" + teks + "</div>",
    // footer: '<a href="">Why do I have this issue?</a>'
  });
}

function swal_konfirmasi(
  pertanyaan = "Apakah Anda Yakin Ingin Menghapus?",
  pesan = "Data Tidak Dapat Dikembalikan!"
) {
  return new Promise((resolve) => {
    Swal.fire({
      title: pertanyaan,
      text: pesan,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3CB371",
      cancelButtonColor: "#DC143C",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      resolve(result.isConfirmed);
    });
  });
}

function loading(
  type = "standard", // standard, circle, hourglass, dots, pulse, wave, custom
  message = "Loading..."
) {
  Notiflix.Loading[type](message, {
    svgColor: "#3cb371", // Warna hijau cerah
  });
}

function loading_remove() {
  Notiflix.Loading.remove();
}

function loading_konten(
  type = "standard", // standard, circle, hourglass, dots, pulse, wave, custom
  selector = "body",
  message = "Proses Data..."
) {
  Notiflix.Block[type](selector, message, {
    svgColor: "#3cb371", // Warna hijau moss
  });
}

function loading_konten_remove() {
  Notiflix.Block.remove();
}

function report(
  type = "success", // success, failure, warning, info
  title = "",
  message = "",
  buttonText = "Ok"
) {
  Notiflix.Report[type](title, message, buttonText, {
    // svgSize: "200px",
    titleMaxLength: 2048,
    messageMaxLength: 2048,
    plainText: false,
    backOverlayClickToClose: true,
  });
}

function notif(type = "success", message = "") {
  // success, failure, warning, info
  Notiflix.Notify[type](message);
}
