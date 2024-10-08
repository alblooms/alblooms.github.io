(function() {
    var allowedLocales = ['en', 'fr', 'es'];
    var pageMappings = {
        '': {
            'en': 'index.html',
            'fr': 'index.html',
            'es': 'index.html'
        },
        'index.html': {
            'en': 'index.html',
            'fr': 'index.html',
            'es': 'index.html'
        },
        'download.html': {
            'en': 'download.html',
            'fr': 'telecharger.html',
            'es': 'descargar.html'
        },
        'about.html': {
            'en': 'about.html',
            'fr': 'a-propos.html',
            'es': 'acerca-de.html'
        },
        'bye.html': {
            'en': 'bye.html',
            'fr': 'adieu.html',
            'es': 'adios.html'
        },
        'language.html': {
            'en': 'language.html',
            'fr': 'langue.html',
            'es': 'idioma.html'
        },
        'contact.html': {
            'en': 'contact.html',
            'fr': 'contact.html',
            'es': 'contacto.html'
        },
        'privacy.html': {
            'en': 'privacy.html',
            'fr': 'confidentialite.html',
            'es': 'privacidad.html'
        },
        'terms.html': {
            'en': 'terms.html',
            'fr': 'termes-conditions.html',
            'es': 'terminos-condiciones.html'
        },
        'cookies.html': {
            'en': 'cookies.html',
            'fr': 'cookies.html',
            'es': 'cookies.html'
        }
    };

    function getUserLanguages() {
        if (navigator.languages && navigator.languages.length) {
            return navigator.languages;
        } else if (navigator.userLanguage) {
            return [navigator.userLanguage];
        } else if (navigator.language) {
            return [navigator.language];
        } else {
            return [];
        }
    }

    function redirectToLocale() {
        var userLanguages = getUserLanguages();
        var currentPage = window.location.pathname.split('/').pop();

        // Handle root URL case
        if (currentPage === '') {
            currentPage = 'index.html';
        }

        if (pageMappings[currentPage]) {
            for (var i = 0; i < userLanguages.length; i++) {
                var langCode = userLanguages[i].split('-')[0];
                if (allowedLocales.includes(langCode)) {
                    var redirectPage = pageMappings[currentPage][langCode];
                    window.location.href = './' + langCode + '/' + redirectPage;
                    return;
                }
            }

            // Default to English if no match is found
            window.location.href = './en/' + pageMappings[currentPage]['en'];
        } else {
            // Default behavior if the current page is not found in pageMappings
            window.location.href = './en/index.html';
        }
    }

    window.onload = redirectToLocale;
})();
