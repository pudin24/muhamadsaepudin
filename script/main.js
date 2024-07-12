// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('nav');

  burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};

navSlide();

// clear form before unload
window.onbeforeunload = () => {
  for (const from of document.getElementsByTagName('form')) {
    form.reset();
  }
};

// Translates
const translations = {
  enlang: {
    nav1: 'Work Experience',
    nav2: 'Certificate',
    nav3: 'Skill & Education',
    nav4: 'Contact',
    memet1: 'My name is',
    memet2:
      'I was born in Bogor on 13 December 1994, an Indonesian citizen with Population Identification Number 3201031312940005, a Muslim man and unmarried. With experience in various fields, I am able to work under pressure, disciplined and honest as well as good time management so that I can complete work quickly and efficiently.',
    work1: 'My Works',
    work2: 'Experience',
    work3:
      'My job is to run machines, create application-based reports and package good finishes according to SOP. Collaboration between sections (warehouse, core cutting & delifree) and communicating needs in each section, then checking the suitability of machines or packaged goods then communicating with before and after sip to avoid even the slightest anomaly and carrying out 5S according to ISO 22000 standards.',
    work4: 'Defense University',
    work5:
      'My job is to photograph and video activities at the Defense University for documentation or file archives, designing products such as (photo albums, banners, brochures, magazines, bumpers and video clips as well as creating news stories) for posting on websites and social media. Warehouse Management containing brochures, magazines, bulletins and recording goods in and out.',
    work6:
      'I work as a galvanizing operator, namely coating iron or steel by immersing it using a crane into galvanized material to avoid rust and corrosion. Shortirs that have been coated and iron calculations that comply with SOP standards and carry out 5R.',
    sert1: 'My',
    sert2: 'Certificates',
    sert3: 'Bonet Certificate',
    sert4:
      'The certificate is held based on the regulation of the Minister of Education and Culture of the Republic of Indonesia number 59 of 2011 concerning the criteria for graduating students from educational units and the implementation of madrasah school exams and national exams for the 2011/2012 academic year and the decision of the National Education Standards Agency (BSNP) number 0011/P/BSNP/XII/2011 concerning Standard Operating Procedures (SOP) for the 2011/2012 academic year.',
    sert5: 'English Certificate',
    sert6: 'Certificate held by the Triple "J" Vocational High School Education and Skills Institute regarding the assessment of English language skills.',
    sert7: 'Driving Lesson Certificate',
    sert8:
      'The certificate was held by the Kusumawardhana Foundation, the "Mahardika" Education and Training Institute under the guidance of the Department of Manpower and Transmigration of the Republic of Indonesia, West Java Province Manpower and Transmigration Service Office.',
    sked1: 'My Skills',
    sked2: 'and Education',
    sked3: 'Computer and Network Engineering',
    sked4: 'The soft skills and hard skills that I have gained from various companies where I have worked include :',
    sked5: 'Problem Solving',
    sked6: 'Communication',
    sked7: 'Teamwork',
    sked8: 'Able to work under pressure',
    sked9: 'Working with K3',
    sked10: 'Time Management',
    sked11: 'Quick to Adapt',
    sked12: 'Responsibility',
    sked13: 'perseverance and Resilience',
    sked14: 'Work Ethics',
    sked15: 'Operating Machines',
    sked16: 'Making Reports (Microsoft Office)',
    sked17: 'Repairing Production Machines',
    sked18: 'Making Application-based Reports',
    sked19: 'Quality Control',
    sked20: 'Assembly',
    sked21: 'Photo Editing (Adobe Photoshop)',
    sked22: 'Video Editing (Adobe Premier)',
    sked23: 'Maintenance',
    sked24: 'Works according to ISO 22000 standards',
    contact1: 'Address',
    contact2: 'Street Hambalang village RT 005 RW 002 Citeureup sub-district Bogor regency postal code 16810',
    contact3: 'Phone',
  },
  idlang: {
    nav1: 'Pengalaman Kerja',
    nav2: 'Sertifikat',
    nav3: 'Pendidikan & Kemampuan',
    nav4: 'Kontak',
    memet1: 'Nama saya',
    memet2:
      'Saya lahir di Bogor tanggal 13 Desember 1994, Warga Negara Indonesia dengan Nomor Induk Kependudukan 3201031312940005, Pria beragama Islam dan belum menikah. Dengan pengalaman di berbagai bidang, saya mampu bekerja dibawah tekanan, disiplin dan jujur ​​serta manajemen waktu yang baik sehingga saya dapat menyelesaikan pekerjaan dengan cepat dan efisien.',
    work1: 'Pengalaman',
    work2: 'Kerja',
    work3:
      'Tugas saya adalah menjalankan mesin, membuat laporan berbasis aplikasi dan mengemas penyelesaian yang baik sesuai SOP. Kolaborasi antar bagian (gudang, core cutting & delifree) dan mengkomunikasikan kebutuhan pada masing-masing bagian, kemudian melakukan pengecekan kesesuaian mesin atau barang yang dikemas kemudian melakukan komunikasi dengan sebelum dan sesudah sip untuk menghindari anomali sekecil apapun dan melaksanakan 5R sesuai standar ISO 22000.',
    work4: 'Universitas Pertahanan',
    work5:
      'Pekerjaan saya adalah memotret dan video kegiatan di Universitas Pertahanan untuk dokumentasi atau pengarsipan file, merancang produk seperti (album foto, spanduk, brosur, majalah, bumper dan klip video serta membuat berita) untuk diposting di website dan media sosial . Manajemen Gudang yang berisi brosur, majalah, buletin dan pencatatan barang masuk dan keluar.',
    work6:
      'Saya bekerja sebagai operator galvanisasi yaitu melapisi besi atau baja dengan cara direndam menggunakan crane ke dalam material galvanis agar terhindar dari karat dan korosi. Shortir yang telah dilapisi dan perhitungan besi yang memenuhi standar SOP dan menjalankan 5R.',
    sert1: 'Sertifikat',
    sert2: 'yang Saya Miliki',
    sert3: 'Sertifikat Bonet',
    sert4:
      'Sertifikat tersebut diselenggarakan berdasarkan Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 59 Tahun 2011 tentang Kriteria Kelulusan Peserta Didik Satuan Pendidikan dan Penyelenggaraan Ujian Sekolah Madrasah dan Ujian Nasional Tahun Pelajaran 2011/2012. dan keputusan Badan Standar Nasional Pendidikan (BSNP) nomor 0011/P/BSNP/XII/2011 tentang Standar Operasional Prosedur (SOP) Tahun Pelajaran 2011/2012.',
    sert5: 'Sertifikat Bahasa Inggris',
    sert6: 'Sertifikat yang dimiliki oleh Lembaga Pendidikan dan Keterampilan SMK Triple "J" mengenai penilaian kemampuan berbahasa Inggris.',
    sert7: 'Sertifikat Mengemudi',
    sert8:
      'Sertifikat tersebut dipegang oleh Yayasan Kusumawardhana, Lembaga Pendidikan dan Pelatihan "Mahardika" yang berada di bawah bimbingan Departemen Tenaga Kerja dan Transmigrasi Republik Indonesia, Dinas Tenaga Kerja dan Transmigrasi Provinsi Jawa Barat.',
    sked1: 'Pendidikan dan',
    sked2: 'Kemampuan Saya',
    sked3: 'Teknik Komputer dan Jaringan',
    sked4: 'Adapun softskill dan hardskill yang saya peroleh dari berbagai perusahaan tempat saya bekerja antara lain :',
    sked5: 'Penyelesaian masalah',
    sked6: 'Komunikasi',
    sked7: 'Bekerja dengan Tim',
    sked8: 'Dapat bekerja dibawah tekanan',
    sked9: 'Bekerja dengan K3',
    sked10: 'Manajemen Waktu',
    sked11: 'Cepat Beradaptasi',
    sked12: 'Bertanggungjawab',
    sked13: 'ketekunan dan ketahanan',
    sked14: 'Etika Bekerja',
    sked15: 'Operator Mesin',
    sked16: 'Pembuatan Laporan (Microsoft Office)',
    sked17: 'Memperbaiki Mesin Produksi (Pengetahuan Dasar)',
    sked18: 'Pembuatan Laporan Berbasis Aplikasi',
    sked19: 'Kontrol Kualitas',
    sked20: 'Perakitan',
    sked21: 'Edit Foto (Adobe Photoshop)',
    sked22: 'Edit Video (Adobe Premier)',
    sked23: 'Perbaikan Dasar',
    sked24: 'Bekerja sesuai standar ISO 22000',
    contact1: 'Alamat',
    contact2: 'Jalan. Kp. Hambalang RT. 005 RW. 002 Kecamatan Citeureup Kabupaten Bogor Kode Pos 16810',
    contact3: 'Telepon',
  },
};

const languageSelectop = document.querySelector('select');
let nav1 = document.getElementById('nav-1');
let nav2 = document.getElementById('nav-2');
let nav3 = document.getElementById('nav-3');
let nav4 = document.getElementById('nav-4');
let memet1 = document.getElementById('memet-1');
let memet2 = document.getElementById('memet-2');
let work1 = document.getElementById('work-1');
let work2 = document.getElementById('work-2');
let work3 = document.getElementById('work-3');
let work4 = document.getElementById('work-4');
let work5 = document.getElementById('work-5');
let work6 = document.getElementById('work-6');
let work7 = document.getElementById('work-7');
let sert1 = document.getElementById('sert-1');
let sert2 = document.getElementById('sert-2');
let sert3 = document.getElementById('sert-3');
let sert4 = document.getElementById('sert-4');
let sert5 = document.getElementById('sert-5');
let sert6 = document.getElementById('sert-6');
let sert7 = document.getElementById('sert-7');
let sert8 = document.getElementById('sert-8');
let sked1 = document.getElementById('sked-1');
let sked2 = document.getElementById('sked-2');
let sked3 = document.getElementById('sked-3');
let sked4 = document.getElementById('sked-4');
let sked5 = document.getElementById('sked-5');
let sked6 = document.getElementById('sked-6');
let sked7 = document.getElementById('sked-7');
let sked8 = document.getElementById('sked-8');
let sked9 = document.getElementById('sked-9');
let sked10 = document.getElementById('sked-10');
let sked11 = document.getElementById('sked-11');
let sked12 = document.getElementById('sked-12');
let sked13 = document.getElementById('sked-13');
let sked14 = document.getElementById('sked-14');
let sked15 = document.getElementById('sked-15');
let sked16 = document.getElementById('sked-16');
let sked17 = document.getElementById('sked-17');
let sked18 = document.getElementById('sked-18');
let sked19 = document.getElementById('sked-19');
let sked20 = document.getElementById('sked-20');
let sked21 = document.getElementById('sked-21');
let sked22 = document.getElementById('sked-22');
let sked23 = document.getElementById('sked-23');
let sked24 = document.getElementById('sked-24');
let contact1 = document.getElementById('contact-1');
let contact2 = document.getElementById('contact-2');
let contact3 = document.getElementById('contact-3');

languageSelectop.addEventListener('change', (even) => {
  setLanguage(even.target.value);
});

const setLanguage = (language) => {
  if (language == 'enlang') {
    nav1.innerText = translations.enlang.nav1;
    nav2.innerText = translations.enlang.nav2;
    nav3.innerText = translations.enlang.nav3;
    nav4.innerText = translations.enlang.nav4;
    memet1.innerText = translations.enlang.memet1;
    memet2.innerText = translations.enlang.memet2;
    work1.innerText = translations.enlang.work1;
    work2.innerText = translations.enlang.work2;
    work3.innerText = translations.enlang.work3;
    work4.innerText = translations.enlang.work4;
    work5.innerText = translations.enlang.work5;
    work6.innerText = translations.enlang.work6;
    sert1.innerText = translations.enlang.sert1;
    sert2.innerText = translations.enlang.sert2;
    sert3.innerText = translations.enlang.sert3;
    sert4.innerText = translations.enlang.sert4;
    sert5.innerText = translations.enlang.sert5;
    sert6.innerText = translations.enlang.sert6;
    sert7.innerText = translations.enlang.sert7;
    sert8.innerText = translations.enlang.sert8;
    sked1.innerText = translations.enlang.sked1;
    sked2.innerText = translations.enlang.sked2;
    sked3.innerText = translations.enlang.sked3;
    sked4.innerText = translations.enlang.sked4;
    sked5.innerText = translations.enlang.sked5;
    sked6.innerText = translations.enlang.sked6;
    sked7.innerText = translations.enlang.sked7;
    sked8.innerText = translations.enlang.sked8;
    sked9.innerText = translations.enlang.sked9;
    sked10.innerText = translations.enlang.sked10;
    sked11.innerText = translations.enlang.sked11;
    sked12.innerText = translations.enlang.sked12;
    sked13.innerText = translations.enlang.sked13;
    sked14.innerText = translations.enlang.sked14;
    sked15.innerText = translations.enlang.sked15;
    sked16.innerText = translations.enlang.sked16;
    sked17.innerText = translations.enlang.sked17;
    sked18.innerText = translations.enlang.sked18;
    sked19.innerText = translations.enlang.sked19;
    sked20.innerText = translations.enlang.sked20;
    sked21.innerText = translations.enlang.sked21;
    sked22.innerText = translations.enlang.sked22;
    sked23.innerText = translations.enlang.sked23;
    sked24.innerText = translations.enlang.sked24;
    contact1.innerText = translations.enlang.contact1;
    contact2.innerText = translations.enlang.contact2;
    contact3.innerText = translations.enlang.contact3;
  } else if (language == 'idlang') {
    nav1.innerText = translations.idlang.nav1;
    nav2.innerText = translations.idlang.nav2;
    nav3.innerText = translations.idlang.nav3;
    nav4.innerText = translations.idlang.nav4;
    memet1.innerText = translations.idlang.memet1;
    memet2.innerText = translations.idlang.memet2;
    work1.innerText = translations.idlang.work1;
    work2.innerText = translations.idlang.work2;
    work3.innerText = translations.idlang.work3;
    work4.innerText = translations.idlang.work4;
    work5.innerText = translations.idlang.work5;
    work6.innerText = translations.idlang.work6;
    sert1.innerText = translations.idlang.sert1;
    sert2.innerText = translations.idlang.sert2;
    sert3.innerText = translations.idlang.sert3;
    sert4.innerText = translations.idlang.sert4;
    sert5.innerText = translations.idlang.sert5;
    sert6.innerText = translations.idlang.sert6;
    sert7.innerText = translations.idlang.sert7;
    sked1.innerText = translations.idlang.sked1;
    sert2.innerText = translations.idlang.sert2;
    sert3.innerText = translations.idlang.sert3;
    sert4.innerText = translations.idlang.sert4;
    sert5.innerText = translations.idlang.sert5;
    sert6.innerText = translations.idlang.sert6;
    sert7.innerText = translations.idlang.sert7;
    sert8.innerText = translations.idlang.sert8;
    sked1.innerText = translations.idlang.sked1;
    sked2.innerText = translations.idlang.sked2;
    sked3.innerText = translations.idlang.sked3;
    sked4.innerText = translations.idlang.sked4;
    sked5.innerText = translations.idlang.sked5;
    sked6.innerText = translations.idlang.sked6;
    sked7.innerText = translations.idlang.sked7;
    sked8.innerText = translations.idlang.sked8;
    sked9.innerText = translations.idlang.sked9;
    sked10.innerText = translations.idlang.sked10;
    sked11.innerText = translations.idlang.sked11;
    sked12.innerText = translations.idlang.sked12;
    sked13.innerText = translations.idlang.sked13;
    sked14.innerText = translations.idlang.sked14;
    sked15.innerText = translations.idlang.sked15;
    sked16.innerText = translations.idlang.sked16;
    sked17.innerText = translations.idlang.sked17;
    sked18.innerText = translations.idlang.sked18;
    sked19.innerText = translations.idlang.sked19;
    sked20.innerText = translations.idlang.sked20;
    sked21.innerText = translations.idlang.sked21;
    sked22.innerText = translations.idlang.sked22;
    sked23.innerText = translations.idlang.sked23;
    sked24.innerText = translations.idlang.sked24;
    contact1.innerText = translations.idlang.contact1;
    contact2.innerText = translations.idlang.contact2;
    contact3.innerText = translations.idlang.contact3;
  }
};
