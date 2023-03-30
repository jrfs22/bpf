const profile = {
    biodata: {
        nama: 'Josep Ronaldo Francis Siregar',
        birth: '22 Juni 2002',
        hobbys: [
            "Game", "Trading", "Politics"
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
    kontak: [
        {
            'kontakk_id' : 1,
            'name': 'github',
            'link': 'https://github.com/jrfs22'
        },
        {
            'kontakk_id' : 2,
            'name': 'linkedin',
            'link': 'https://www.linkedin.com/in/josep-ronaldo-francis-siregar-4344111ba/'
        },
        {
            'kontakk_id' : 3,
            'name': 'instagram',
            'link': 'https://instagram.com/mr.jrfs'
        }
    ]
}


var app = new Vue({
    el: '#app',
    data: profile
})