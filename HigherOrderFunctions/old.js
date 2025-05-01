module.exports = {
    roles: [
        {

            roleName: 'it-admin',
            claims: {
                1: { perms: 4, scope: 1 },
                1.2: { perms: 7, scope: 1 },
                1.3: { perms: 7, scope: 1 },
                1.4: { perms: 7, scope: 1 },
                1.5: { perms: 7, scope: 1 },
                2: { perms: 5, scope: 1 },
                3: { perms: 7, scope: 1 },
                4: { perms: 4, scope: 1 },
                5.1: { perms: 5, scope: 1 },
                6: { perms: 4, scope: 1 },
                7: { perms: 4, scope: 1 },
                8: { perms: 7, scope: 1 },
                9: { perms: 7, scope: 1 }
            }
        },
        {
            roleName: 'mkt-admin',
            claims: {
                1: { perms: 4, scope: 1 },
                1.3: { perms: 4, scope: 1 },
                1.4: { perms: 4, scope: 1 },
                1.5: { perms: 4, scope: 1 },
                2: { perms: 5, scope: 1 },
                3: { perms: 4, scope: 0 },
                4: { perms: 4, scope: 1 },
                5.2: { perms: 5, scope: 1 },
                6: { perms: 4, scope: 1 },
                7: { perms: 4, scope: 1 },
                9: { perms: 7, scope: 1 }
            }
        },
        {
            roleName: 'app-developer',
            claims: {
                1.4: { perms: 4, scope: 1 },
                1.5: { perms: 4, scope: 1 },
                2: { perms: 7, scope: 0 },
                3: { perms: 5, scope: 0 },
                6: { perms: 4, scope: 0 },
                8: { perms: 7, scope: 1 },
                9: { perms: 7, scope: 1 }
            }
        },
        {
            roleName: 'app-developer-read',
            claims: {
                1.4: { perms: 4, scope: 1 },
                1.5: { perms: 4, scope: 1 },
                2: { perms: 4, scope: 0 },
                3: { perms: 4, scope: 0 },
                6: { perms: 4, scope: 0 },
                8: { perms: 0, scope: 1 },
                9: { perms: 0, scope: 1 }
            }
        }
    ],
    defaultUsers: [
        {
            loginId: 'admin',
            firstName: 'Admin',
            password: 'Admin@123',
            lastName: 'User',
            contactNo: '919090909090',
            role: 'root',
            email: 'admin.leap@mc.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['root']
        },
        {
            loginId: 'defaultItAdmin',
            firstName: 'DefaultItAdmin',
            password: 'DefaultItAdmin@123',
            lastName: 'User',
            contactNo: '919090909091',
            role: 'it-admin',
            email: 'zeba.karishma@comviva.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['it-admin']
        },
        {
            loginId: 'defaultMktAdmin',
            firstName: 'DefaultMktAdmin',
            password: 'DefaultMktAdmin@123',
            lastName: 'User',
            contactNo: '919090909092',
            role: 'mkt-admin',
            email: 'aditya.prateek@comviva.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['mkt-admin']
        },
        {
            loginId: 'defaultAppDev',
            firstName: 'DefaultAppDev',
            password: 'DefaultAppDev@123',
            lastName: 'User',
            contactNo: '919090909093',
            role: 'app-developer',
            email: 'yuvaraj.k@comviva.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        },
        {
            loginId: 'defaultAppDev1',
            firstName: 'DefaultAppDe',
            password: 'DefaultAppDev1@123',
            lastName: 'User',
            contactNo: '919090909033',
            role: 'app-developer',
            email: 'yuvaraj2.k@comviva.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        },
        {
            loginId: 'defaultAppRead',
            firstName: 'DefaultAppRead',
            password: 'DefaultAppRead@123',
            lastName: 'User',
            contactNo: '919090909195',
            role: 'app-developer-read',
            email: 'yuvarajk@comviva.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer-read']
        },
        {
            loginId: 'belonie',
            firstName: 'Belonie',
            password: 'Belonie@123',
            lastName: 'User',
            contactNo: '242064691293',
            role: 'app-developer',
            email: 'Belonie.Moubakoulou@mtn.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        },
        {
            loginId: 'cecilia',
            firstName: 'Cecilia',
            password: 'Cecilia@123',
            lastName: 'User',
            contactNo: '242064691177',
            role: 'app-developer',
            email: 'Cecilia.Mboumba@mtn.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        },
        {
            loginId: 'keita',
            firstName: 'Keita',
            password: 'Keita@123',
            lastName: 'User',
            contactNo: '242064691285',
            role: 'app-developer',
            email: 'Mouhamadou.Keita@mtn.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        }, {
            loginId: 'sandip',
            firstName: 'Sandip',
            password: 'Sandip@123',
            lastName: 'User',
            contactNo: '242064691289',
            role: 'app-developer',
            email: 'Sandip.Bhattacharyay@mtn.com',
            tags: {
                lang: 'en'
            },
            RoleIdMapping: ['app-developer']
        }
    ]
};
