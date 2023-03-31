const profile = {
    logo : 'JRFS',
    biodata: {
        nama : 'Josep Ronaldo Francis Siregar',
        desc : 'A student who is confused and often innovates continuously but is never executed and often thinks too far from what will happen.',
        birth: '22 Juni 2002',
        hobbys: [
            {
                'hobbys_id' : '1',
                'name' : 'Badminton'
            },
            {
                'hobbys_id' : '2',
                'name' : 'Game'
            },
            {
                'hobbys_id' : '3',
                'name' : 'Trading'
            }
        ],
        citizen: 'Indonesia',
        img: 'JRFS.jpg'
    },
    education: [
        {
            'id' : 1,
            'sekolah': "Politeknik Caltex Riau",
            'date' : '2021 - Now'
        },
        {
            'id' : 2,
            'sekolah': "SMKN 2 Pekanbaru",
            'date' : '2017 - 2020'
        },
        {
            'id' : 3,
            'sekolah': "SMPN 8 Tapung",
            'date' : '2014 - 2017'
        },
        {
            'id' : 4,
            'sekolah': "SDN 032 Seigaro",
            'date' : '2008 - 2014'
        }
    ],
    skills: [
        "Web Backend Developer",
        "Web Frontend Developer",
        "Web Fullstack",
        "Database administrator"
    ],
    portofolio: [
        {
            'img' : 'rendangpakombak.png',
            'desc' : 'The umkm project from the RPL course, I served as a Fullstack Dev',
            'link' : 'http://rpotesting.rf.gd/?i=1'
        },
        {
            'img' : 'bsti.png',
            'desc' : 'Project from BSTI by serving as a database administrator',
            'link' : '#'
        }
    ],
    kontak: [
        {
            'kontak_id' : 1,
            'name': 'github',
            'color' : 'primary',
            'link': 'https://github.com/jrfs22'
        },
        {
            'kontak_id' : 2,
            'name': 'linkedin',
            'color' : 'warning',
            'link': 'https://www.linkedin.com/in/josep-ronaldo-francis-siregar-4344111ba/'
        },
        {
            'kontak_id' : 3,
            'name': 'instagram',
            'color' : 'success',
            'link': 'https://instagram.com/mr.jrfs'
        },
        {
            'kontak_id' : 4,
            'name': 'whatsapp',
            'color' : 'danger',
            'link': 'https://wa.link/hp4oji'
        }
    ]
}


var app = new Vue({
    el: '#app',
    data: profile
})