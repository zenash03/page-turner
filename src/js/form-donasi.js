function validationForm(dataForm) {
    const namaLengkapErr = document.getElementById('namaLengkapErr');
    const noTeleponErr = document.getElementById('noTeleponErr');
    const judulBukuErr = document.getElementById('judulBukuErr');
    const penulisErr = document.getElementById('penulisErr');
    const kondisiBukuErr = document.getElementById('kondisiBukuErr');
    const deskripsiErr = document.getElementById('deskripsiErr');
    const opsiErr = document.getElementById('opsiErr');
    const alamatErr = document.getElementById('alamatErr');
    const termsErr = document.getElementById('termsErr');

    let data = new FormData(dataForm) ;
    for(let [key, value] of data) {
        // console.log(key, value);
    }
    const 
        namaLengkap = data.get('namaLengkap'),
        noTelepon = data.get('noTelepon'),
        judulBuku = data.get('judulBuku'),
        penulis = data.get('penulis'),
        kondisiBuku = data.get('kondisiBuku'),
        deskripsi = data.get('deskripsi'),
        opsi = data.get('opsi'),
        alamat = data.get('alamat'),
        terms = data.get('terms');

    resetMessage(namaLengkapErr, noTeleponErr, judulBukuErr, penulisErr, kondisiBukuErr, deskripsiErr, opsiErr, alamatErr, termsErr);
    if (namaLengkap.length == "") {
        showMessage(namaLengkapErr, 'field nama lengkap tidak boleh kosong!');
        return false;
    } 
    else if (namaLengkap.length < 6 || namaLengkap.length > 20) {
        showMessage(namaLengkapErr, 'field nama lengkap harus diantara 6 dan 20 karakter!');
        return false;

    }
    if (noTelepon.length == "") {
        showMessage(noTeleponErr, 'field nomor telepon tidak boleh kosong!');
        return false;

    }
    else if (noTelepon.length < 10 || noTelepon.length > 12) {
        showMessage(noTeleponErr, 'field nomor telepon harus lebih dari 10 karakter!')
        return false;

    }
    if (judulBuku.length == "") {
        showMessage(judulBukuErr, 'field judul buku tidak boleh kosong!');
        return false;

    }
    else if (judulBuku.length < 3 || judulBuku.length > 40) {
        showMessage(judulBukuErr, 'field judul buku harus diantara 3 dan 40 karakter!')
        return false;

    }
    if (penulis.length == "") {
        showMessage(penulisErr, 'field penulis tidak boleh kosong!');
        return false;

    }
    else if (penulis.length < 3 || penulis.length > 20) {
        showMessage(penulisErr, 'field penulis harus diantar 3 dan 20 karakter!');
        return false;

    }
    if (kondisiBuku == "") {
        showMessage(kondisiBukuErr, 'wajib memilih salah satu kondisi buku');
        return false;

    }
    if (opsi == "") {
        showMessage(opsiErr, 'opsi pengiriman buku tidak boleh kosong!');
        return false;

    }
    if (opsi == "penjemputan") {
        if (alamat == "") {
            showMessage(alamatErr, 'alamat pengiriman tidak boleh kosong!');
            return false;

        } 
        else if (alamat.length < 8 || alamat.length > 100) {
            showMessage(alamatErr, 'alamat pengiriman harus diantara 8 dan 100 karakter!');
            return false;

        }
    }
    if (terms == null) {
        showMessage(termsErr, 'wajib menyetujui terms and conditions');
        return false;
    }
    alert('donasi buku berhasil');
    location.href = "./landing-page.html";
}

function showMessage(comp, message) {
    comp.innerHTML = `* ${message}`;
}
function resetMessage(...comp) {
    comp.forEach(c => {
        c.innerHTML = '';
    });
}

const donasiForm = document.getElementById('donasi-form');
donasiForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(this)

    validationForm(this);
    // if (validationForm()) {

    // }
});

const noTelepon = document.getElementById('noTelepon');
noTelepon.addEventListener('keypress', function(event) {
    if(event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
})

const opsiPengiriman = document.getElementById('opsi');

opsiPengiriman.addEventListener('input', function() {
    const opsiJemput = document.getElementById('opsiJemput');
    console.log(this.value)
    const opsiErr = document.getElementById('opsiErr');
    resetMessage(opsiErr);
    opsiJemput.className = "hide";
    if(this.value == "") {
        showMessage(opsiErr, 'opsi pengiriman buku tidak boleh kosong!');
        return false;
    } 
    else if (this.value == "penjemputan") {
        opsiJemput.className = "";
    }

})