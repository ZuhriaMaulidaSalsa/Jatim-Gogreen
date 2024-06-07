
function cekkeseluruhan(){/*Fungsi cekkkeseluruhan berfungsi untuk mengecek fungsion checknama,checknomor,checkemail,checkgender,checktanggal,checkalamat,checkpassword,checkkabupaten,dan checkbox*/
	if (checknama() & checknomor() & checkemail() & checkgender() & checktanggal() & checkalamat() & checkpassword() & checkkabupaten() & checkbox() == true){/*Jika fungsion checknama,checknomor,checkemail,checkgender,checktanggal,checkalamat,checkpassword,checkkabupaten,dan checkbox bernilai true maka yang dijalankan baris nomor 4*/
		return true;/*Yang dikeluarkan dari pengondisian ini yaitu bernilai true*/
	}
		function checknama() {/*Fungsi checknama berfungsi untuk mengecek isi input nama*/
		var nama=document.iniform.nama.value /*membuat variabel nama untuk wadah inputan dari input name nama*/
		var cekhuruf=/^[A-Za-z]{1,}$/g;/*membuat variabel cekhuruf untuk syarat penulisan di inputan*/
		var masalahnama=document.getElementById('masalahnama')/*membuat variabel masalah nama untuk wadah dari inner HTML di function ceknama*/
		var warna=document.getElementById("nama")/*variabel warna yang diambil dari id nama di html yang nantinya akan mengganti warna border di html*/
			if (nama == "") {/*pengondisian dimana variabel nama kosong, maka yang akan dijalankan yaitu baris nomor 12,13,14*/
				masalahnama.innerHTML="Inputan Nama anda masih kosong!";/*berfungsi untuk ditampilkan di halaman web pada id masalahnama*/
				warna.style.border="2px solid red";/*merubah border dari inputan nama menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			if (cekhuruf.test(nama)){/*pengondisian dimana variabel nama sesuai dengan regexp cekhuruf, maka yang akan dijalankan yaitu baris nomor 17,18,19*/
				masalahnama.innerHTML="";/*berfungsi untuk ditampilkan di halaman web pada id masalahnama*/
				warna.style.border="2px solid #198754";/*merubah border dari inputan nama menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else {/*pengondisian dimana variabel nama tidak sesuai dengan regexp cek huruf dan tidak kosong, maka yang akan dijalankan yaitu baris nomor 22,23,24*/
				masalahnama.innerHTML="Pastikan memasukkan format huruf yang benar!";/*berfungsi untuk ditampilkan di halaman web pada id masalahnama*/
				warna.style.border="2px solid red";/*merubah border dari inputan nama menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}	
		}
		function checknomor(){/*Fungsi checknomor berfungsi untuk mengecek isi input nomor telepon*/
		var nomor=document.iniform.telepon.value/*membuat variabel nomor untuk wadah inputan dari input name telepon*/
		var ceknomornya=/^(08)([0-9]){1,}$/g;/*membuat variabel ceknomornya untuk syarat penulisan di inputan*/
		var masalahtelepon=document.getElementById("masalahtelepon")/*membuat variabel masalahtelepon untuk wadah dari inner HTML di function ceknomor*/
		var warna=document.getElementById("telepon")/*variabel warna yang diambil dari id telepon di html yang nantinya akan mengganti warna border di html*/
			if (nomor == ""){/*pengondisian dimana variabel nomor kosong, maka yang akan dijalankan yaitu baris nomor 33,34,35*/
				masalahtelepon.innerHTML="Inputan Telepon masih kosong!";/*berfungsi untuk ditampilkan di halaman web pada id masalahtelepon*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else if (ceknomornya.test(nomor)){/*pengondisian dimana variabel nomor sesuai dengan regexp ceknomornya, maka yang akan dijalankan yaitu baris nomor 38,39,40*/
				masalahtelepon.innerHTML=""/*berfungsi untuk ditampilkan di halaman web pada id masalahtelepon*/
				warna.style.border="2px solid #198754"/*merubah border dari inputan nomor menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else {/*pengondisian dimana variabel nama tidak sesuai dengan regexp ceknomornya dan tidak kosong, maka yang akan dijalankan yaitu baris nomor 43,44,45*/
				masalahtelepon.innerHTML="Masukkan format angka yang benar!";/*berfungsi untuk ditampilkan di halaman web pada id masalahtelepon*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
		}
		function checkemail(){/*Fungsi checkemail berfungsi untuk mengecek isi input email*/
		var iniemail=document.iniform.email.value/*membuat variabel iniemail untuk wadah inputan dari input name email*/
		var masalahemail=document.getElementById("masalahemail")/*membuat variabel masalahemail untuk wadah dari inner HTML di function checkemail*/
		var warna=document.getElementById("email")/*variabel warna yang diambil dari id email di html yang nantinya akan mengganti warna border di html*/
			if (iniemail == ""){/*pengondisian dimana variabel iniemail kosong, maka yang akan dijalankan yaitu baris nomor 53,54,55*/
				masalahemail.innerHTML="Inputan Email masih kosong!";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else if (iniemail.indexOf("@") !=-1 & iniemail.indexOf(".") !=-1){/*pengondisian dimana variabel iniemail berisi setidaknya 1 abjad "@" dan ".", maka yang akan dijalankan yaitu baris nomor 58,59,60*/
				masalahemail.innerHTML=""/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid #198754"/*merubah border dari inputan nomor menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else {/*pengondisian dimana variabel iniemail kosong dan tidak terdapat minimal 1 abjad "@" dan "1", maka yang akan dijalankan yaitu baris nomor 63,64,65*/
				masalahemail.innerHTML="Masukkan data Email yang benar!";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
		}
		function checkpassword(){/*Fungsi checkpassword berfungsi untuk mengecek isi input password*/
		var passswordnya=document.iniform.password.value/*membuat variabel passwordnya untuk wadah inputan dari input name password*/
		var masalahpassword=document.getElementById("masalahpassword")/*membuat variabel masalahpassword untuk wadah dari inner HTML di function checkpassword*/
		var syarat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;/*pengecekan apakah isi dari inputan terdapat huruf kecil,huruf kapital, angka dan total inputan lebih dari 7*/
		var warna=document.getElementById("psword")/*variabel warna yang diambil dari id password di html yang nantinya akan mengganti warna border di html*/
			if (passswordnya == ""){/*pengondisian dimana variabel passwordnya kosong, maka yang akan dijalankan yaitu baris nomor 74,75,76*/
				masalahpassword.innerHTML="Inputan Password Masih Kosong!"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else if (passswordnya.length <= 7) {/*pengondisian dimana variabel passwordnya berisi kurang dari samadengan 7, maka yang akan dijalankan yaitu baris nomor 79,80,81*/
				masalahpassword.innerHTML="Masukkan minimal 8 digit Password!"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else if (syarat.test(passswordnya)){/*pengondisian dimana variabel passwordnya sesuai dengan regexp syarat dan berisi lebih dari 7, maka yang akan dijalankan yaitu baris nomor 84,85,86*/
				masalahpassword.innerHTML=""/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid #198754"/*merubah border dari inputan nomor menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else{/*pengondisian dimana variabel passwordnya tidak kosong dan tidak sesuai regexp, maka yang akan dijalankan yaitu baris nomor 89,90,91*/
				masalahpassword.innerHTML="Pastikan Password yang anda buat terdapat minimal 1 huruf kapital,1 huruf kecil dan 1 angka!"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
		}
		function checkgender(){/*Fungsi checkgender berfungsi untuk mengecek isi input jenis kelamin*/
		var inijenis=document.iniform.nilai.value/*membuat variabel inijenis untuk wadah inputan dari input name nilai*/
		var masalahgender=document.getElementById("masalahgender")/*membuat variabel masalahgender untuk wadah dari inner HTML di function checkgender*/
			if (inijenis == ""){/*pengondisian dimana variabel inijenis kosong, maka yang akan dijalankan yaitu baris nomor 98,99*/
				masalahgender.innerHTML="Inputan jenis kelamin masih kosong!"/*berfungsi untuk ditampilkan di halaman web*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else {//pengondisian dimana variabel inijenis tidak kosong, maka yang akan dijalankan yaitu baris nomor 102,103
				masalahgender.innerHTML=""/*berfungsi untuk ditampilkan di halaman web*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
		}
		function checktanggal(){/*Fungsi checktanggal berfungsi untuk mengecek isi input tanggal*/
		var initanggal=document.iniform.tanggal.value/*membuat variabel initanggal untuk wadah inputan dari input name tanggal*/
		var cektanggalnya=/^(20[2][2-9])[-](0[1-9]|1[0-2])[-](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/g;/*Syarat atau acuan format inputan tanggal*/
		var masalahtanggal=document.getElementById("masalahtanggal")/*membuat variabel masalahtanggal untuk wadah dari inner HTML di function checktanggal*/
		var warna=document.getElementById("tanggal")/*variabel warna yang diambil dari id tanggal di html yang nantinya akan mengganti warna border di html*/
			if (initanggal == ""){/*pengondisian dimana variabel initanggal kosong, maka yang akan dijalankan yaitu baris nomor 111,112,113*/
				masalahtanggal.innerHTML="Inputan tanggal masih kosong!";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			if (cektanggalnya.test(initanggal)){/*pengondisian dimana variabel initanggal sesuai dengan regexp cektanggalnya, maka yang akan dijalankan yaitu baris nomor 117,118,119*/
				masalahtanggal.innerHTML=""/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid #198754"/*merubah border dari inputan nomor menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else {/*pengondisian dimana variabel initanggal tidak kosong dan tidak sesuai regexp cektanggalnya, maka yang akan dijalankan yaitu baris nomor 111,112,113*/
				masalahtanggal.innerHTML="Inputan tanggal anda salah!";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
		}
		function checkalamat(){/*Fungsi checkalamat berfungsi untuk mengecek isi input alamat*/
		var alamatnya=document.iniform.alamat.value/*membuat variabel inialamat untuk wadah inputan dari input name alamat*/
		var masalahalamat=document.getElementById("masalahalamat")/*membuat variabel masalahalamat untuk wadah dari inner HTML di function checkalamat*/
		var warna=document.getElementById("alamat")/*variabel warna yang diambil dari id alamat di html yang nantinya akan mengganti warna border di html*/
			if (alamatnya == ""){/*pengondisian dimana variabel alamatnya kosong, maka yang akan dijalankan yaitu baris nomor 132,133,134*/
				masalahalamat.innerHTML="Inputan alamat masih kosong!"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red";/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else if (alamatnya.length >=100){/*pengondisian dimana variabel alamatnya lebih dari sama dengan 100, maka yang akan dijalankan yaitu baris nomor 137,138,139*/
				masalahalamat.innerHTML="Maksimal inputan 100 digit!";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red";/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else {/*pengondisian dimana variabel alamatnya tidak kosong dan kurang dari 100, maka yang akan dijalankan yaitu baris nomor 142,143,144*/
				masalahalamat.innerHTML="";/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid #198754";/*merubah border dari inputan nomor menjadi hijau*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
		}
		function checkkabupaten(){/*Fungsi checkkabupaten berfungsi untuk mengecek isi input dropdown kabupaten*/
		var isikabupaten=document.iniform.inikabupaten.value/*membuat variabel isikabupaten untuk wadah inputan dari input name inikabupaten*/
		var syaratkabupaten=/^(Kota Surabaya|Kota Blitar|Kota Batu|Kota Madiun|Kota Malang|Kota Mojokerto|Kota Probolinggo|Kota Pasuruan|Kota Kediri|Kabupaten Nganjuk|Kabupaten Bangkalan|Kabupaten Ngawi|Kabupaten Magetan|Kabupaten Jombang|Kabupaten Gresik|Kabupaten Mojokerto|Kabupaten Banyuwangi|Kabupaten Blitar|Kabupaten Malang|Kabupaten Bojonegoro|Kabupaten Tulungagung|Kabupaten Jember|Kabupaten Lamongan|Kabupaten Lumajang|Kabupaten Madiun|Kabupaten Pacitan|Kabupaten Pamekasan|Kabupaten Pasuruan|Kabupaten Sumenep|Kabupaten Ponorogo|Kabupaten Probolinggo|Kabupaten Sidoarjo|Kabupaten Sampang|Kabupaten Situbondo|Kabupaten Trenggalek|Kabupaten Tuban|Kabupaten Bondowoso)$/g;
		var masalahkabupaten=document.getElementById("masalahkabupaten")/*membuat variabel masalahkabupaten untuk wadah dari inner HTML di function checkkabupaten*/
		var warna=document.getElementById("kabupaten")/*variabel warna yang diambil dari id kabupaten di html yang nantinya akan mengganti warna border di html*/
			if (isikabupaten == ""){/*Pengkondisian dimana variabel isikabupaten kosong,maka yang akan dijalankan yaitu baris nomor 153,154,155*/
				masalahkabupaten.innerHTML="Inputan kabupaten masih kosong!"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			if (syaratkabupaten.test(isikabupaten)){/*pengondisian dimana variabel isikabupaten sesuai dengan regexp syaratkabupaten, maka yang akan dijalankan yaitu baris nomor 158,159,160*/
				masalahkabupaten.innerHTML=""/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid #198754"/*merubah border dari inputan nomor menjadi merah*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
			else {/*pengondisian dimana variabel isikabupaten tidak kosong dan tidak terdapat di regexp syarat kabupaten, maka yang akan dijalankan yaitu baris nomor 163,164,165*/
				masalahkabupaten.innerHTML="Pilih kabupaten yang ada di Jawa Timur"/*berfungsi untuk ditampilkan di halaman web*/
				warna.style.border="2px solid red"/*merubah border dari inputan nomor menjadi merah*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
		}
		function checkbox(){/*Fungsi checkcheckbox berfungsi untuk mengecek isi input checkbox balasan*/
		var inicheckbox1=document.iniform.checkbox1.checked/*membuat variabel inicheckbox1 untuk wadah inputan dari input name checkbox1*/
		var inicheckbox2=document.iniform.checkbox2.checked/*membuat variabel inicheckbox2 untuk wadah inputan dari input name checkbox2*/
		var inicheckbox3=document.iniform.checkbox3.checked/*membuat variabel inicheckbox3 untuk wadah inputan dari input name checkbox3*/
		var inicheckbox4=document.iniform.checkbox4.checked/*membuat variabel inicheckbox4 untuk wadah inputan dari input name checkbox4*/
		var masalahcheckbox=document.getElementById("masalahcheckbox")/*membuat variabel masalahcheckbox untuk wadah dari inner HTML di function checkbox*/
			if (inicheckbox1 == "" & inicheckbox2 == "" & inicheckbox3 == "" & inicheckbox4 == "") {/*pengondisian dimana variabel checkbox1,checkbox2,checkbox3,dan checkbox 4 kosong, maka yang akan dijalankan yaitu baris nomor 168,169,170*/
				masalahcheckbox.innerHTML="Pilih Minimal 1 balasan";/*berfungsi untuk ditampilkan di halaman web*/
				return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
			}
			else{/*pengondisian dimana variabel checkbox1,checkbox2,checkbox3,dan checkbox 4 tidak kosong, maka yang akan dijalankan yaitu baris nomor 173,174*/
				masalahcheckbox.innerHTML="";/*berfungsi untuk ditampilkan di halaman web*/
				return true;/*Yang dikeluarkan dari function ini yaitu bernilai true*/
			}
		}
return false;/*Yang dikeluarkan dari function ini yaitu bernilai false*/
}