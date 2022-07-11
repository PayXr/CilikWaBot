const data = {
    general: {
        NUMBER_SYNTAX_ERROR:
            "```Masukkan nomor kontak yang valid sesuai sintaks di bawah ini:\n    1. XXXXXXXXXX\n    2. Tag the person\n    3. YYXXXXXXXXXX (YY- Country Code, without zeros)```",
        MESSAGE_NOT_TAGGED: "```Tandai pesan atau masukkan nomor.```",
        NOT_A_GROUP: "```Perintah hanya berlaku dalam obrolan grup.```",
        BOT_NOT_ADMIN: "```Maaf, tidak memiliki izin untuk melakukannya karena saya bukan admin.```",
        ADMIN_PERMISSION:
            "```Anda harus menjadi admin untuk menjalankan perintah ini.```",
        SUDO_PERMISSION:
            "```Hey there, I am ⚡Cilik-Userbot⚡. I guess you were trying to use my commands in``` *{BotsApp.groupName}*```. However, the bot is currently in {worktype} mode. This enables only the owner and sudo users to use the command``` *{commandName}* ```.\n\nIf you are keen to use my features, you can deploy BotsApp on your own account without much effort, in less than 5 minutes! Check out the links given below.```\n\n🔗https://mybotsapp.com\n🔗https://github.com/BotsAppOfficial/BotsApp",
        ERROR_TEMPLATE:
            "```Sepertinya ada yang tidak beres. Tidak perlu khawatir. Berikut adalah beberapa log sejak bot tidak merespons seperti yang diharapkan.```\n```---------```\n```🧐 Command:``` *{commandName}*\n```😎 From Me?:``` *{fromMe}*\n```🗣️ Was a reply?:``` *{isReply}*\n```👥 In a group?``` *{isGroup}*\n```📥 In Inbox?``` *{isPm}*\n```📸 Command with image?``` *{isImage}*\n```🕺🏻 Is Bot group admin?``` *{isBotGroupAdmin}*\n```📈 Was Sender group admin?``` *{isSenderGroupAdmin}*\n```🫂 Was sender sudo?``` *{isSenderSudo}*\n```⚠️ Error:``` \n*{err}*\n```---------```\n_To figure out what exactly went wrong, please report/raise the issue on our support chat at_ https://chat.whatsapp.com/DGEZ2VUgpAdJzcS7g7TID3",
        SUCCESSFUL_CONNECTION: "*Cilik-Userbot successfuly activated.*\n```Bot is currently working in``` *{worktype}* ```mode.```\n```Untuk informasi lebih lanjut tentang kerja Bot dan izin, lihat:``` \n🔗https://github.com/PayXr/CilikWaBot."
    },
    abl: {
        DESCRIPTION: "Modul untuk membuat daftar hitam seseorang atau obrolan dari menggunakan bot.",
        EXTENDED_DESCRIPTION:
            "```Tambahkan orang ke daftar hitam dan``` *batasi mereka* ```dari menggunakan bot. Anda dapat membuat daftar hitam``` *grup* atau *orang dalam grup tertentu* atau *orang sama sekali* ```dari menggunakan bot. Ini adalah konfigurasinya -\n\n1. Jika Anda mengirim perintah dalam grup``` *tanpa membalas* ```kepada siapa pun, bot akan``` *dinonaktifkan untuk grup itu.*\n```2. Jika Anda mengirim perintah dalam grup dan``` *membalas seseorang*, ```mereka tidak akan dapat menggunakan bot dalam hal itu``` *kelompok tertentu.*\n```3. Jika Anda menandai seseorang di grup seperti``` *.abl @<orang>*, ```mereka tidak akan dapat menggunakan bot dalam grup tertentu.\n4. Jika Anda mengirim perintah di``` *obrolan pribadi* ```dari seseorang, mereka akan masuk daftar hitam karena menggunakan bot di``` *grup mana saja.*",
        PM_ACKNOWLEDGEMENT: "```{user} dilarang menggunakan bot di semua obrolan.```",
        CAN_NOT_BLACKLIST_BOT: "```Bot tidak dapat membuat daftar hitam itu sendiri. Tandai atau balas ke pengguna lain.```",
        GRP_ACKNOWLEDGEMENT: "```{user} telah masuk daftar hitam karena menggunakan bot di grup ini.```",
        GRP_BAN: "```Bot telah dinonaktifkan untuk grup {user}. Untuk konfigurasi lainnya, gunakan``` *.help abl* ```command.```"
    },
    add: {
        DESCRIPTION: "Modul untuk menambahkan seseorang ke grup.",
        EXTENDED_DESCRIPTION:
            "```Tambahkan orang baru ke grup dengan memasukkan nomor ponsel mereka sesuai format yang disebutkan di bawah ini.\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nFor example -\n``` *.add 9861212121*",
        NUMBER_SYNTAX_ERROR:
            "```Format yang valid -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nSebagai contoh-```\n*.add 9861212121*\n*.add 919861212121*",
        NO_ARG_ERROR:
            "```Masukkan nomor yang ingin Anda tambahkan.\n\nContohnya,```  *.add <NUMBER>* .",
        NO_24HR_BAN:
            "```Nomor yang dimasukkan tidak dapat ditambahkan kembali sebelum 24 jam.```",
        ALREADY_MEMBER:
            "```Nomor yang dimasukkan sudah menjadi anggota grup ini.```",
        NOT_ON_WHATSAPP:
            "```Nomor yang Anda coba tambahkan tidak tersedia di WhatsApp.\nHarap verifikasi nomornya lagi.```",
        SUCCESS: " berhasil ditambahkan!",
        PRIVACY: "```Nomor yang Anda coba tambahkan tidak dapat ditambahkan ke grup secara langsung. Tautan undangan telah dikirimkan kepada mereka.```"
    },
    admins: {
        DESCRIPTION: "Tag admins",
        EXTENDED_DESCRIPTION:
            "```Tag admin grup (baik sebagai balasan ke pesan lain atau tag langsung).```",
        NOT_GROUP_CHAT:
            "*.admins*  ```perintah hanya berlaku untuk obrolan grup.```"
    },
    alive: {
        DESCRIPTION: "Periksa apakah bot sedang online.",
        EXTENDED_DESCRIPTION:
            "```Modul ini dapat digunakan untuk memeriksa apakah bot sedang online atau tidak.\n\nContoh penggunaan,```\n*.alive*",
        ALIVE_MSG: "𝘾𝙄𝙇𝙄𝙆-𝙐𝙎𝙀𝙍𝘽𝙊𝙏 _up and running_ ⚡\n┏━━━━━━━━━━━━━━━━━\n⚡ʙᴏᴛ ᴠᴇʀsɪᴏɴ  : 1.0\n⚡ᴍᴏᴅᴜʟᴇs: 40 ```modules```\n⚡ɢʀᴏᴜᴘ ᴡᴀ: https://chat.whatsapp.com/JcaDxcF4S6H8zuHIHBS9gi\n⚡ᴄʜᴀɴɴᴇʟ : t.me/CilikProject\n⚡ʙʀᴀɴᴄʜ : multi-devices\n┗━━━━━━━━━━━━━━━━━━\n\nketik ```.help``` untuk melihat semua module.",
    },
    block: {
        DESCRIPTION: "Block contact",
        EXTENDED_DESCRIPTION: "```Tambahkan nomor ke daftar blokir. Anda dapat membalas orang di grup / pm atau menggunakan .block <nomor>.```",
        NUMBER_SYNTAX_ERROR:
            "```Masukkan nomor kontak yang valid sesuai sintaks di bawah ini:\n    1. XXXXXXXXXX\n    2. Tag orangnya\n    3. +YYXXXXXXXXXX (YY-Kode Negara, tanpa 0)```",
        MESSAGE_NOT_TAGGED: "```Tandai pesan atau masukkan nomor untuk melanjutkan.```",
        NOT_BLOCK_BOT: "```Bot tidak dapat memblokir dirinya sendiri```"
    },
    carbon: {
        DESCRIPTION: "Ubah teks/kode menjadi gambar karbon.",
        EXTENDED_DESCRIPTION: "```Modul ini dapat digunakan untuk mengonversi teks/kode menjadi gambar karbon.\n\nContoh Penggunaan,```\n    *.carbon <text>* \n    *.carbon*  ```dan membalas pesan teks.\n\nGunakan -t setelah```  *.carbon*  ```untuk mendapatkan daftar tema yang tersedia.\nUntuk menentukan tema, gunakan```  *.carbon <text> -t <theme>* .",
        NO_INPUT: "```Tidak ada masukan yang diberikan.\nSilakan gunakan perintah```  *.carbon <text>*  ```or reply to a text message with```  *.carbon*  ```to carbonize the text.```",
        CARBONIZING: "```Mengubah teks Anda menjadi cuplikan kode. Mohon tunggu...```",
        OUTPUT: "*<< Ini gambar karbon Anda! >>*\n```Carbon by Cilik-Bots⚡\nSkema warna: {}```",
        INVALID_REPLY: "```Pesan yang dibalas harus berupa teks.```",
        INVALID_THEME: "```Harap masukkan tema yang valid.\nPerhatikan bahwa nama tema adalah```  *case sensitive*."
    },
    create: {
        DESCRIPTION: "Buat grup baru dengan orang yang dibalas",
        EXTENDED_DESCRIPTION: "```Modul ini akan membuat grup WhatsApp baru dan akan menambahkan orang yang dibalas ke dalam grup.",
        NO_TEXT: "```Masukkan nama grup```",
        TAG_PERSON: "```Balas ke orang yang harus dimasukkan dalam grup```",
        GROUP_CREATED: "```Grup telah berhasil dibuat.```"
    },
    cpp: {
        DESCRIPTION: "Jalankan kode C++ dan langsung dapatkan output ke WhatsApp.",
        EXTENDED_DESCRIPTION: "```Gunakan modul ini untuk mengeksekusi kode C++ dan mendapatkan output langsung di WhatsApp. Untuk menghindari kesalahan, cobalah untuk tidak menggunakan input.\nJika Anda ingin memberikan masukan, gunakan``` *-i * ```memberikan masukan. Lihat contoh untuk sebuah ide.```",
        NO_INPUT: "```Berikan beberapa kode C++ untuk dieksekusi. gunakan``` *.help cpp* ```perintah untuk mendapatkan info lebih lanjut tentang modul ini.```",
        BOILERPLATE: "#termasuk <bits/stdc++.h>\nmenggunakan namespace std;\n\nint main(){\n    {code}\n}",
        OUTPUT_TEMPLATE: "⭐ *Output:*```\n{stdout}```\n\n⚠️ *Error:*```\n{stderr}```\n\n👨🏻‍💻 *Command:*```\n{code}```",
        PROCESSING: "```Mengeksekusi, harap tunggu...```"
    },
    decodeqr: {
        DESCRIPTION: "Decode QR code",
        EXTENDED_DESCRIPTION: "```Gunakan plugin ini untuk memecahkan kode kode QR hanya dengan membalas gambar QR yang ada di obrolan menggunakan```  *.decodeqr*  ```atau mengunggah gambar QR dengan teks sebagai```  *.decodeqr*",
        INVALID_REPLY: "```Pastikan Anda membalas gambar/stiker QR.```",
        INVALID_INPUT: "```input tidak valid. gunakan``` *.help decodeqr*  ```for more info.```",
        PROCESSING: "```Decoding. Please wait...```"
    },
    demote: {
        DESCRIPTION: "Demosikan seseorang dari admin",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk menurunkan seseorang dari admin dengan memasukkan nomor ponsel orang tersebut. Sintaks yang valid -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nSebagai contoh``` -\n*.demote 9861212121*",
        NOT_A_GROUP: "```Perintah ini hanya berlaku untuk obrolan grup.```",
        BOT_NOT_ADMIN: "```Maaf, tidak memiliki izin untuk melakukannya karena saya bukan admin.```",
        PERSON_NOT_IN_GROUP: "```Orang tidak ditemukan.```",
        MESSAGE_NOT_TAGGED:
            "```Balas/tag/masukkan nomor kontak orang yang akan diturunkan pangkatnya.```"
    },
    disappear: {
        DESCRIPTION: "Alihkan pesan yang hilang",
        EXTENDED_DESCRIPTION: "```Alihkan pesan yang hilang dengan menggunakan perintah``` *.dissapear* ."
    },
    getdp: {
        DESCRIPTION: "Dapatkan Foto Profil",
        EXTENDED_DESCRIPTION: "```Dapatkan gambar profil grup dalam percakapan grup atau gambar profil itu sendiri dalam obrolan pribadi. Tag seseorang di grup untuk mendapatkan foto profilnya.```",
        IMAGE_CAPTION: "```Berikut adalah Foto Profilnya. Procured by Cilik-Userbot⚡.```",
        PROCESSING: "```Sedang mendapatkan display picture...```",
        TRY_AGAIN: "```Gambar tampilan tidak ditemukan. Unggah gambar dan coba lagi.```"
    },
    github: {
        DESCRIPTION: "Github Profile",
        EXTENDED_DESCRIPTION: "```Dapatkan profil github dengan perintah```  *.github <user>*  ```or replying```  *.github* .",
        NO_ARG_ERROR: "```Silakan masukkan nama pengguna. gunakan``` *.help github* ```untuk info lebih lanjut.```",
        ERROR_MSG: "```Masukkan nama pengguna yang valid.```",
        FETCHING: "```Mengambil detail pengguna dari GitHub. Please wait...```"
    },
    help: {
        DESCRIPTION: "Dapatkan daftar perintah dan info tentang modul",
        EXTENDED_DESCRIPTION:
            "Modul ini digunakan untuk mendapatkan info tentang modul lain dan Perintahnya.",
        HEAD: "━━━━━━━━━━\n⚡ *Cilik-Userbot Menu*\n━━━━━━━━━━\n\nGunakan ```.help nama plugin``` \nuntuk info lebih Jelas tentang modul\n\n📚Nama Perintah :\n",
        TEMPLATE: "\n➡ ```{}```",
        COMMAND_INTERFACE: "⚡ *Cilik-Userbot Bantuan* ⚡\n\n",
        COMMAND_INTERFACE_TEMPLATE: "🖱️ *Prefix :* ```{}```\n📋 *Info :* {}",
        FOOTER: "```\n\nKlik tombol di bawah ini untuk mendapatkan pratinjau plugin.```"
    },
    invite: {
        DESCRIPTION: "Modul untuk membuat tautan undangan grup",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mengirim tautan undangan grup dalam grup atau secara pribadi kepada seseorang.```",
        LINK_SENT: "```Tautan undangan terkirim dalam DM, silakan periksa.```"
    },
    lyrics: {
        DESCRIPTION: "Modul untuk menemukan lirik lagu",
        EXTENDED_DESCRIPTION: "```Gunakan modul ini untuk menemukan lirik lagu dengan menggunakan```  *.lyrics*  ```silahkan dicoba.```",
        NO_ARG: "```Silakan masukkan nama lagu.```",
        NOT_FOUND: "```Lagu tidak ditemukan☹️ !```",
        PROCESSING: "```🔍Mencari. Please wait....```"
    },
    meaning: {
        DESCRIPTION: "Cari arti kata dalam kamus.",
        EXTENDED_DESCRIPTION: "Temukan arti sebuah kata dalam kamus dengan menggunakan .meaning <kata>.",
        NO_ARG: "```Silakan masukkan kata.```",
        NOT_FOUND: "```Kata tidak ditemukan dalam kamus!```",
    },
    mute: {
        DESCRIPTION: "Bisukan obrolan grup untuk waktu tertentu.",
        EXTENDED_DESCRIPTION: "Nonaktifkan anggota non-admin grup. Anda bahkan dapat menentukan durasi menggunakan s, m atau h.\n\nMisalnya:\n .mute 15 m   akan mengubah izin obrolan menjadi hanya admin selama 15 menit.",
        NOT_GROUP_CHAT:
            "*.mute*  ```perintah hanya berlaku dalam obrolan grup.```",
        NOT_ADMIN:
            "```Maaf, tidak memiliki izin untuk melakukannya karena saya bukan admin.```",
        CHAT_ADMIN_ONLY: "```Izin obrolan diubah menjadi```  *admin only*.",
        MENTION_DURATION:
            "```Sebutkan berapa lama Anda ingin menonaktifkan obrolan. Sebagai contoh,```\n*.mute 10 s*  ```untuk menonaktifkan selama 10 detik.```",
        CHAT_ALL_MEMBERS:
            "```Izin obrolan diubah menjadi```  *semua anggota grup*."
    },
    neko: {
        DESCRIPTION: "Salin teks Anda ke nekobin",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk menempelkan teks Anda ke pastebin (NEKOBIN). Masukkan teks dengan perintah```  *.neko* .",
        ENTER_TEXT: "```Silakan masukkan pesan teks bersama dengan perintah.```",
        TRY_LATER: "```Terlalu banyak mencoba. Silakan coba lagi nanti.```",
        PROCESSING: "```Menempelkan teks ke nekobin. Mohon tunggu...```"
    },
    news: {
        DESCRIPTION: "Ambil berita dalam format yang dapat dibaca seluler",
        EXTENDED_DESCRIPTION:
        "```Gunakan modul ini untuk mengambil berita dari publikasi dalam format yang dapat dibaca seluler dari sekitar 1500 publikasi. Masukkan teks dengan perintah```  *.news* .\n\nUntuk mencari publikasi, gunakan:-\n```.news search ``` _publication name_\n\nTo ambil berita, use:-\n```.news fetch ``` _publication name_\n\nBerita diambil dalam format epub karena lebih nyaman untuk dibaca di perangkat seluler. Untuk membacanya di perangkat Android, Anda dapat menggunakan aplikasi ini: https://play.google.com/store/apps/details?id=org.readera",
        NO_COMMMAND: "```Tidak ada argumen yang diberikan. Menggunakan``` *.help news* ```untuk info tentang cara menggunakan perintah.```",
        NO_PUB_NAME: "```Tidak ada nama publikasi yang diberikan. Menggunakan``` *.help news* ```untuk info tentang cara menggunakan perintah.```"
    },
    ocr: {
        DESCRIPTION: "Pengenalan Karakter Optik",
        EXTENDED_DESCRIPTION: "```Gunakan modul ini untuk mendapatkan teks dari gambar dengan```  *.ocr*  ``Silahkan dicoba```",
        PROCESSING: "```⚡Sedang memperoses. Please wait...```",
        ERROR_MSG: "```OCR adalah singkatan dari Optical Character Recognition. Balas gambar dengan teks untuk mendapatkan teks itu. Menggunakan perintah``` *.help ocr* ```untuk info lebih lanjut.```",
        NO_TEXT: "Tidak dapat menemukan teks dalam gambar"
    }, 
    ping: {
       DESCRIPTION: "Mengukur ping Anda.",
       EXTENDED_DESCRIPTION: "Mengukur koneksi Anda melalui internet per ms.",
       PING_MSG: "⚡*Pong!* ```{PINGVAR} ms```"
    },
    promote: {
        DESCRIPTION: "Promosikan anggota menjadi admin",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mempromosikan anggota menjadi admin. Anda dapat memasukkan nomor ponsel orang tersebut sesuai format di bawah ini. Sintaks yang valid -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nSebagai contoh-\n``` *.promote 9861212121*",
        NOT_A_GROUP: "```Perintah ini hanya berlaku dalam obrolan grup.```",
        BOT_NOT_ADMIN: "```Maaf, tidak memiliki izin untuk melakukannya karena saya bukan admin.```",
        PERSON_NOT_IN_GROUP: "```Orang tidak ada dalam grup.```",
        MESSAGE_NOT_TAGGED:
            "```Balas/tag/masukkan nomor kontak orang yang akan dipromosikan.```"
    },
    qr: {
        DESCRIPTION: "Ubah teks/gambar menjadi kode QR",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mengubah teks menjadi kode qr. Anda dapat menentukan teks setelah perintah .qr atau balas pesan menggunakan .qr.```",
        INVALID_INPUT:
            "```Tidak ada masukan yang diberikan. Tentukan teks yang akan dikonversi ke kode QR setelah perintah ```  *.qr*  ```atau balas teks/gambar menggunakan perintah```  *.qr*  ```coba aja```",
        PROCESSING: "```⚡Generating QR code. Please wait...```",
        IMAGE_CAPTION: "```Ini gambar QR Anda.```",
    },
    rbl: {
        DESCRIPTION: "Modul untuk mengaktifkan orang atau grup daftar hitam untuk menggunakan bot.",
        EXTENDED_DESCRIPTION:
            "```Hapus orang atau grup dari daftar hitam. Bekerja dengan cara yang mirip dengan abl. Gunakan``` *.help abl* ```untuk info lebih lanjut.```",
        PM_ACKNOWLEDGEMENT: "```{user} dihapus dari Daftar Hitam untuk semua obrolan.```",
        GRP_ACKNOWLEDGEMENT: "```{user} telah dihapus dari Daftar Hitam untuk grup ini.```",
        GRP_BAN: "```Bot telah diaktifkan untuk grup {user}```",
        NOT_IN_BLACKLIST: "```Daftar untuk {user} tidak ditemukan di Daftar Hitam.```",
    },
    remove: {
        DESCRIPTION: "Modul untuk mengeluarkan seseorang dari grup.",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk menghapus orang dari grup dengan menandai mereka```  *.remove @<orang-untuk-dikick>*  ```atau balas kepesan```  *.remove*.",
        INPUT_ERROR: "```Balas ke orang yang ingin Anda hapus atau tandai mereka.\n\nContohnya,```  *.remove @<orang-untuk-dikick>*  ```atau balas menggunakan```  *.remove*."
    },
    rename: {
        DESCRIPTION: "Module to rename a pdf or text document.",
        EXTENDED_DESCRIPTION:
            "```Use this module to rename documents by ```replying to them```  *.rename <new-name>*.",
        DOWNLOADING: "```Your document is being processed...```",
        PROVIDE_NEW_NAME: "```Provide a new name for your document.```",
        REPLY_TO_DOCUMENT:
            "```Reply to a valid document message to change it's file name.```",
        ERROR:
            "```Woops, something went wrong. Try again later, or proabaly not with this again...```",
        VALID_REPLY:
            "```Please tag a valid image / sticker / audio / document / pdf / GIF.```",
    },
    setdp: {
        DESCRIPTION: "Ubah ikon grup",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mengubah ikon grup. Tandai gambar dengan perintah atau kirim gambar yang diinginkan dengan teks sebagai perintah```",
        NOT_AN_IMAGE: "```Silahkan reply atau beri caption pada gambar yang ingin dijadikan icon grup.```",
        NOT_A_GROUP: "```Perintah ini hanya berlaku dalam obrolan grup.```",
        ICON_CHANGED: "```Mengubah ikon/gambar grup...```"
    },
    song: {
        DESCRIPTION: "Download songs",
        EXTENDED_DESCRIPTION: "Gunakan modul ini untuk mengunduh audio pilihan Anda dengan menentukan tautan YouTube atau nama lagu.",
        ENTER_SONG: "```Masukkan lagu dengan perintah```",
        SONG_NOT_FOUND: "```Tidak dapat menemukan lagu yang Anda masukkan. Periksa apakah tautan atau kata kunci yang dimasukkan sudah benar.```",
        DOWNLOADING: "```Mengunduh lagu Anda...```",
        UPLOADING: "```Mengunggah lagu...```",
        INTRO: ""
    },
    sticker: {
        DESCRIPTION: "Modul untuk mengonversi gambar menjadi stiker",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mengonversi gambar apa pun dari obrolan Anda menjadi stiker. Balas pesan gambar dengan perintah```  *.sticker*  ```untuk mengonversi dan mengirim gambar itu sebagai stiker.```",
        TAG_A_VALID_MEDIA_MESSAGE:
            "```Harap beri tag pesan gambar/video/gif yang valid untuk dikonversi menjadi stiker.```",
        DOWNLOADING: "```Stiker Anda sedang diunduh. Mohon tunggu...```"
    },
    stoi: {
        DESCRIPTION: "Modul untuk mengonversi stiker menjadi gambar",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk mengonversi stiker apa pun dari obrolan Anda menjadi gambar. Balas pesan stiker dengan perintah```  *.stoi*  ```untuk mengonversi dan mengirim stiker itu sebagai gambar.```",
        ANIMATED_STICKER_ERROR: "```Pesan stiker yang ditandai dianimasikan, ``` *Tidak dapat mengonversi stiker animasi menjadi gambar*, ```Coba lagi dengan stiker statis.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Harap beri tag pada pesan stiker yang valid untuk mengonversi ke gambar.```",
        DOWNLOADING: "```Gambar Anda sedang diunduh. Mohon tunggu...```",
        ERROR: "```Ups, ada yang tidak beres. Coba lagi nanti, atau mungkin tidak dengan ini lagi...```"
    },
    stov: {
        DESCRIPTION: "Module to convert animated sticker to video",
        EXTENDED_DESCRIPTION:
            "```Use this module to convert any animated sticker from your chat to a video. Reply to an animated sticker message with the command```  *.stov*  ```to convert and send that sticker as a video.```",
        ANIMATED_STICKER_ERROR:
            "```Tagged sticker message is animated, ``` *Can not convert animated sticker to image*, ```Try again with a static sticker.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Please tag a valid animated sticker message to convert to a video.```",
        DOWNLOADING: "```Your sticker is downloading. Please wait...```",
        ERROR:
            "```Woops, something went wrong. Try again later, or proabaly not with this again...```",
   },
   tr: {
        DESCRIPTION: "Penerjemah bahasa",
        EXTENDED_DESCRIPTION: "```Gunakan```  *.tr <text> | <language>*  ```untuk menerjemahkan teks ke bahasa yang ditentukan. Anda juga dapat membalas pesan teks dengan sintaks```  *.tr <bahasa>*  ```untuk menerjemahkan teks.\nJika Anda tidak menentukan bahasa, defaultnya adalah <English class=''></English>```",
        PROCESSING: "```Menerjemahkan. Mohon tunggu...```",
        TOO_LONG: "*Total karakter harus kurang dari 4000.*\n```Total karakter untuk input saat ini adalah``` ```{}.```",
        LANGUAGE_NOT_SUPPORTED: "```Bahasa tidak valid.```",
        INVALID_REPLY: "```Tolong balas pesan teks.```",
        SUCCESS: "*TR:* Menerjemahkan [*{}* -> *{}*]\n\n{}",
        NO_INPUT: "```Tidak ada masukan yang terdeteksi. Mohon gunakan``` *.help tts* ```untuk info tentang cara menggunakan modul ini.```"
    },
    tts: {
        DESCRIPTION: "Text To Speech.",
        EXTENDED_DESCRIPTION:
            "```Use```  *.tts <text>*  ```or```  *.tts <text> | <language_code>*  ```to convert text to speech.\nYou can also reply to a text message with syntax```  *.tr <language>*  ```to translate text.```",
        PROCESSING: "```Converting text to speech. Please wait...```",
        TOO_LONG:
            "*Total characters should be less than 200.*\n```Total characters for current input were``` ```{}.```",
        INVALID_LANG_CODE:
            "*The Language Code was incorrect.*\n```The Language Code is generally the first two letters of the language you're trying to convert to.```",
        NO_INPUT:
            "```No input was detected. Please use``` *.help tts* ```for info on how to use this module.```",
        INCORRECT_REPLY: "```Please reply to a valid text message only.```",
    },
    tagall: {
        DESCRIPTION: "Modul untuk menandai semua orang dalam grup.",
        EXTENDED_DESCRIPTION:
            "```Gunakan modul ini untuk menandai semua orang di grup dengan membalas pesan atau hanya menggunakan```  *.tagall*  ```coba saja.```",
        TAG_MESSAGE: "*Everyone!*"
    },
    ud: {
        DESCRIPTION: "Urban Dictionary",
        EXTENDED_DESCRIPTION: "```Gunakan modul ini untuk menemukan arti sebuah kata dalam Urban Dictionary. masukan perintah```  *.ud*  ```coba aja```",
        NO_ARG: "```Silakan masukkan kata yang akan dicari.```",
        NOT_FOUND: "```term``` *{}* ```Tidak ditemukan!```",
        PROCESSING: "```Mencari. Mohon tunggu....```"
    },
    unblock: {
        DESCRIPTION: "Unblock contact",
        EXTENDED_DESCRIPTION: "```Hapus nomor dari daftar blokir.```",
        NUMBER_SYNTAX_ERROR:
            "```Masukkan nomor kontak yang valid. Sintaks yang valid,\n    1. XXXXXXXXXX\n    2. Tag orangnya\n    3. +YYXXXXXXXXXX (YY- Kode negara, tanpa 0)```",
        MESSAGE_NOT_TAGGED: "```Tandai pesan atau masukkan nomor.```",
        NOT_UNBLOCK_BOT: "```Bot tidak dapat membuka blokir sendiri```"
    },
    unmute: {
        DESCRIPTION: "Unmute group chat",
        EXTENDED_DESCRIPTION: "unmute anggota non-admin grup",
        NOT_GROUP_CHAT:
            "*.unmute*  ```perintah hanya berlaku untuk obrolan grup.```",
        NOT_ADMIN:
            "```Maaf, tidak memiliki izin untuk melakukannya karena saya bukan admin.```",
        CHAT_ALL_MEMBERS:
            "```Izin obrolan diubah menjadi```  *semua anggota grup*."
    },
    weather: {
        DESCRIPTION: "Dapatkan data cuaca kota",
        EXTENDED_DESCRIPTION:
            "```Dapatkan info cuaca dengan memasukkan nama kota.```",
        WEATHER_DATA:
            "*Temperature:* {tempInC} °C | {tempInF} °F\n*Min Temp:* {minTempInC} °C | {minTempInF} °F\n*Max Temp:* {maxTempInC} °C | {maxTempInF} °F\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}°\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}",
        CITY_NAME_REQUIRED:
            "```Sebutkan nama kota untuk mencari data cuaca.```",
        ERROR_OCCURED:
            "```Ups, tidak dapat memproses permintaan ini. Coba lagi nanti.```",
        DOWNLOADING: "```⛈️Mengolah data. Mohon tunggu...```",
        NOT_FOUND: "```Kota tidak ditemukan. Harap periksa kembali ejaan dan patuhi sintaks.```"
    },
    welcome: {
        DESCRIPTION: "Selamat datang anggota baru ke grup dengan pesan khusus.",
        EXTENDED_DESCRIPTION:
            "```Anggota baru obrolan grup akan disambut dengan pesan. Itu bisa berupa gambar, video, gif dengan teks atau hanya pesan teks.\n\nGunakan modul ini untuk mengatur, memperbarui, atau menghapus pesan yang ada.\n\nOpsi selamat datang dapat dinonaktifkan tetapi disimpan menggunakan ```  *.welcome  off*  ```Untuk menghapus pesan yang ada, gunakan```  *.welcome  delete*.  ```Perhatikan, opsi selamat datang masih diaktifkan setelah Anda menggunakan opsi hapus.```",
        NOT_A_GROUP: "```Perintah ini hanya berlaku dalam obrolan grup.```",
        SET_WELCOME_FIRST: "```Setel pesan selamat datang terlebih dahulu.```",
        GREETINGS_ENABLED: "```Pesan selamat datang telah diaktifkan.```",
        GREETINGS_UNENABLED: "```Pesan selamat datang telah dinonaktifkan.```",
        CURRENTLY_ENABLED: "```Salam diaktifkan: True \nSaat ini menyapa anggota baru dengan:```",
        CURRENTLY_DISABLED: "```Salam diaktifkan: False \nSaat ini menyapa anggota baru dengan:```",
        WELCOME_DELETED: "```Pesan selamat datang dihapus.```",
        WELCOME_UPDATED: "```Pesan selamat datang diperbarui dan diaktifkan.```"
    },
    goodbye: {
        DESCRIPTION: "Pesan selamat tinggal untuk obrolan grup setiap kali seseorang pergi.",
        EXTENDED_DESCRIPTION:
            "```Pesan selamat tinggal akan dikirim ketika ada anggota yang meninggalkan grup. Itu bisa berupa gambar, video, gif dengan teks atau hanya pesan teks.\n\nGunakan modul ini untuk mengatur, memperbarui, atau menghapus pesan yang ada.\n\nOpsi selamat tinggal dapat dinonaktifkan tetapi disimpan menggunakan```  *.goodbye  off*  ```Untuk menghapus pesan yang ada, gunakan```  *.goodbye  delete*.  ```Perhatikan, opsi selamat tinggal masih diaktifkan setelah Anda menggunakan opsi hapus.```",
        NOT_A_GROUP: "```Ini bukan grup```",
        SET_GOODBYE_FIRST: "```Tetapkan pesan selamat tinggal terlebih dahulu.```",
        GREETINGS_ENABLED: "```Pesan selamat tinggal telah diaktifkan.```",
        GREETINGS_UNENABLED: "```Pesan selamat tinggal telah dinonaktifkan.```",
        CURRENTLY_ENABLED: "```Salam diaktifkan: True \nSaat ini menyapa anggota baru dengan:```",
        CURRENTLY_DISABLED: "```Salam diaktifkan: True \nSaat ini menyapa anggota baru dengan:```",
        GOODBYE_DELETED: "```Pesan selamat tinggal dihapus.```",
        GOODBYE_UPDATED: "```Pesan selamat tinggal diperbarui dan diaktifkan.```"
    },
    yt: {
        DESCRIPTION: "Dapatkan rekomendasi dan tautan dari Youtube",
        EXTENDED_DESCRIPTION:
            "```Dapatkan 10 rekomendasi pertama dari YouTube dengan nama pengarangnya, stempel waktu dan tautan. Sebutkan kata kunci yang wajib dicari beserta perintahnya.```",
        REPLY: "```Mendapatkan rekomendasi...```",
        NO_VIDEOS: "```Tidak ada video yang dapat ditemukan.```",
        ENTER_INPUT: "```Silakan masukkan kueri yang ingin Anda cari. Gunakan``` *.help yt* ```untuk info lebih lanjut.```"
    }
};

module.exports = data;
export default data;
