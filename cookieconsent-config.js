const im = iframemanager();

/* v1.0 - 2023-11-24 */

im.run({
    onChange: ({changedServices, eventSource}) => {
        if (eventSource.type === 'click') {
            const servicesToAccept = [
                ...CookieConsent.getUserPreferences().acceptedServices['analytics'],
                ...changedServices
                ];
            CookieConsent.acceptService(servicesToAccept, 'analytics');
        }
    },
    currLang: ccActiveLocale,
    services: {
        youtube: {
            embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
            thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
            iframe: {
                allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
            },
            languages: {
                tr: {
                    notice: 'Bu içerik üçüncü taraf bir hizmette barındırılmaktadır. Harici içeriği görüntüleyerek <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">YouTube şartlar ve koşullarını</a> kabul etmiş olursunuz.',
                    loadAllBtn: 'Kabul Et ve Göster'
                },
                en: {
                    notice: 'This content is hosted on a third-party service. By viewing external content, you agree to the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">YouTube Terms and Conditions</a>.',
                    loadAllBtn: 'Accept and Show'
                },
                de: {
                    notice: 'Dieser Inhalt wird von einem Drittanbieterdienst gehostet. Durch Anzeigen externen Inhalts erklären Sie sich mit den <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">YouTube-Geschäftsbedingungen</a> einverstanden.',
                    loadAllBtn: 'Akzeptieren und Anzeigen'
                },
                ar: {
                    notice: 'يتم استضافة هذا المحتوى على خدمة من جهة ثالثة. من خلال مشاهدة المحتوى الخارجي، توافق على <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">شروط وأحكام يوتيوب</a>.',
                    loadAllBtn: 'قبول وعرض'
                },
                es: {
                    notice: 'Este contenido está alojado en un servicio de terceros. Al ver contenido externo, aceptas los <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">términos y condiciones de YouTube</a>.',
                    loadAllBtn: 'Aceptar y Mostrar'
                },
                fr: {
                    notice: 'Ce contenu est hébergé sur un service tiers. En visionnant du contenu externe, vous acceptez les <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">conditions générales de YouTube</a>.',
                    loadAllBtn: 'Accepter et Afficher'
                },
                it: {
                    notice: 'Questo contenuto è ospitato su un servizio di terze parti. Visualizzando contenuti esterni, accetti i <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">termini e le condizioni di YouTube</a>.',
                    loadAllBtn: 'Accetta e Mostra'
                }
            }
        },
        vimeo: {
            embedUrl: 'https://player.vimeo.com/video/{data-id}',
            thumbnailUrl: async (dataId, setThumbnail) => {
                const url = `https://vimeo.com/api/v2/video/${dataId}.json`;
                const response = await (await fetch(url)).json();
                const thumbnailUrl = response[0]?.thumbnail_large;
                thumbnailUrl && setThumbnail(thumbnailUrl);
            },
            iframe: {
                allow: 'fullscreen; picture-in-picture;'
            },
            languages: {
                tr: {
                    notice: 'Bu içerik üçüncü taraf bir hizmette barındırılmaktadır. Harici içeriği görüntüleyerek <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">Vimeo şartlar ve koşullarını</a> kabul etmiş olursunuz.',
                    loadAllBtn: 'Kabul Et ve Göster'
                },
                en: {
                    notice: 'This content is hosted on a third-party service. By viewing external content, you agree to the <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">Vimeo Terms and Conditions</a>.',
                    loadAllBtn: 'Accept and Show'
                },
                de: {
                    notice: 'Dieser Inhalt wird von einem Drittanbieterdienst gehostet. Durch Anzeigen externen Inhalts erklären Sie sich mit den <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">Vimeo-Geschäftsbedingungen</a> einverstanden.',
                    loadAllBtn: 'Akzeptieren und Anzeigen'
                },
                ar: {
                    notice: 'يتم استضافة هذا المحتوى على خدمة من جهة ثالثة. من خلال مشاهدة المحتوى الخارجي، توافق على <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">شروط وأحكام فيميو</a>.',
                    loadAllBtn: 'قبول وعرض'
                },
                es: {
                    notice: 'Este contenido está alojado en un servicio de terceros. Al ver contenido externo, aceptas los <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">términos y condiciones de Vimeo</a>.',
                    loadAllBtn: 'Aceptar y Mostrar'
                },
                fr: {
                    notice: 'Ce contenu est hébergé sur un service tiers. En visionnant du contenu externe, vous acceptez les <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">conditions générales de Vimeo</a>.',
                    loadAllBtn: 'Accepter et Afficher'
                },
                it: {
                    notice: 'Questo contenuto è ospitato su un servizio di terze parti. Visualizzando contenuti esterni, accetti i <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">termini e le condizioni di Vimeo</a>.',
                    loadAllBtn: 'Accetta e Mostra'
                }
            }
        }
    }
});

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box inline",
            position: "bottom left",
            flipButtons: false,
            equalWeightButtons: true
        },
        preferencesModal: {
            layout: "box",
            flipButtons: false,
            equalWeightButtons: true
        }
    },

    categories: {
        necessary: {
            enabled: true,
            readOnly: true,
            services: {}
        },
        functionality: {
            autoClear: {
                reloadPage: true
            },
            services: {}
        },
        analytics: {
            autoClear: {
                reloadPage: true
            },
            services: {
                youtube: {
                    label: "Youtube Embed",
                    onAccept: () => {
                        // console.log("services-youtube-onAccept");
                        im.acceptService("youtube")
                    },
                    onReject: () => {
                        // console.log("services-youtube-onReject");
                        im.rejectService("youtube")
                    }
                },
                vimeo: {
                    label: "Vimeo Embed",
                    onAccept: () => {
                        // console.log("services-vimeo-onAccept");
                        im.acceptService("vimeo")
                    },
                    onReject: () => {
                        // console.log("services-vimeo-onReject");
                        im.rejectService("vimeo")
                    }
                }
            }
        },
        marketing: {
            autoClear: {
                reloadPage: true
            },
            services: {}
        }
    },

    language: {
        default: ccActiveLocale,
        translations: {
            tr: {
                "consentModal": {
                    "label": "Çerez Yönetimi",
                    "title": "Gizlilik Tercihi Merkezi",
                    "description": "İnternet Sitesi’nin çalışabilmesi, daha işlevsel kullanabilmeniz ve deneyiminizin iyileştirilmesi, size yönelik kişiselleştirilmiş ürün ve hizmet tanıtımı yapılabilmesi amacıyla çerezler kullanmaktayız. Zorunlu olmayan çerezler onay vermediğiniz durumda kullanılmayacaktır.",
                    "acceptAllBtn": "Tümünü Kabul Et",
                    "acceptNecessaryBtn": "Tümünü Reddet",
                    "showPreferencesBtn": "Çerez Tercihlerimi Yönet",
                    "closeIconLabel": "Tümünü Reddet ve Kapat",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Gizlilik Politikası</a><a href=\"" + ccUrlKullanim + "\">Kullanım Koşulları</a>"
                },
                "preferencesModal": {
                    "title": "Çerez Yönetim Merkezi",
                    "acceptAllBtn": "Tümünü Kabul Et",
                    "acceptNecessaryBtn": "Tümünü Reddet",
                    "savePreferencesBtn": "Tercihlerimi Kaydet",
                    "closeIconLabel": "Pencereyi Kapat",
                    "serviceCounterLabel": "Servis|Servis",
                    "sections": [
                        {
                            "title": "",
                            "description": "İnternet Sitesi’nin çalışabilmesi için zorunlu çerezler kullanmaktayız. Ayrıca, İnternet Sitesi’ni daha işlevsel kullanabilmeniz ve deneyiminizin iyileştirilmesi kapsamında performans ve analitik çerezleri, size yönelik kişiselleştirilmiş ürün ve hizmet tanıtımı kapsamında ise reklam ve pazarlama çerezleri kullanılmak istenmektedir. Zorunlu olmayan çerezler onay vermediğiniz durumlarda kullanılmayacaktır."
                        },
                        {
                            "title": "Zorunlu Çerezler <span class=\"pm__badge\">Her Zaman Etkin</span>",
                            "description": "Zorunlu çerezler, İnternet Sitesi’ni görüntülemeniz esnasında cihazınıza yerleştirilen ve sunulan online servislerin düzgün şekilde çalışabilmesi için gerekli olan çerezlerdir.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "İşlevsellik Çerezleri",
                            "description": "İşlevsellik çerezleri, Platform üzerindeki belirli işlevlerin sağlanması ve bunlara dair tercihlerinizin hatırlanması için gerekli olan çerezlerdir.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Performans ve Analitik Çerezleri",
                            "description": "Performans ve analitik çerezleri, İnternet Sitesi ziyaret ve trafiğini takip ve analiz etmemizi sağlar. Bu çerezler sayesinde İnternet Sitesi üzerindeki alanlardan hangilerinin en sık ya da seyrek ziyaret edildiği gibi bilgileri edinebilir ve İnternet Sitesi’nin trafiğini optimize edebiliriz.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Reklam ve Pazarlama Çerezleri",
                            "description": "Reklam çerezleri, sizlere İnternet Sitesi’nde veya İnternet Sitesi haricindeki mecralarda görüntüleme geçmişinize ve ziyaretçi profilinize uygun olarak kişiselleştirilmiş ürün ve hizmet tanıtımı yapmak için kullanılır.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Detaylı Bilgi",
                            "description": "Çerezlere ve tercihlerinize ilişkin politikamızla ilgili sorularınız için bizimle <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">iletişime geçebilirsiniz</a>."
                        }
                    ]
                }
            },
            en: {
                "consentModal": {
                    "label": "Cookie consent",
                    "title": "Privacy Preference Center",
                    "description": "We use cookies for the website to function, for you to use it more functionally, and to enhance your experience. Additionally, cookies may be used for personalized product and service promotions. Non-essential cookies will not be used if you do not give your consent.",
                    "acceptAllBtn": "Accept all",
                    "acceptNecessaryBtn": "Reject all",
                    "showPreferencesBtn": "Manage preferences",
                    "closeIconLabel": "Reject All and Close",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Privacy Policy</a><a href=\"" + ccUrlKullanim + "\">Terms and conditions</a>"
                },
                "preferencesModal": {
                    "title": "Consent Preferences Center",
                    "acceptAllBtn": "Accept all",
                    "acceptNecessaryBtn": "Reject all",
                    "savePreferencesBtn": "Save preferences",
                    "closeIconLabel": "Close modal",
                    "serviceCounterLabel": "Service|Services",
                    "sections": [
                        {
                            "title": "",
                            "description": "We use necessary cookies for the website to function. Additionally, performance and analytical cookies are intended to be used for you to use the website more functionally and to enhance your experience. Advertising and marketing cookies are also intended to be used for personalized product and service promotions. Non-essential cookies will not be used if you do not give your consent."
                        },
                        {
                            "title": "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            "description": "Essential cookies are cookies placed on your device during your visit to the website, and they are necessary for the proper functioning of the online services provided.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Functionality Cookies",
                            "description": "Functionality cookies are necessary for providing specific functions on the platform and remembering your preferences related to these functions.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Analytics Cookies",
                            "description": "Performance and analytical cookies allow us to track and analyze website visits and traffic. Through these cookies, we can gather information such as which areas of the website are visited most frequently or infrequently, enabling us to optimize website traffic.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Advertisement Cookies",
                            "description": "Advertising cookies are used to personalize product and service promotions tailored to your viewing history and visitor profile on the website or other media channels, both on and off the website.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "More information",
                            "description": "For questions regarding our cookie and preference policy, you can contact us at <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">contact us</a>."
                        }
                    ]
                }
            },
            de: {
                "consentModal": {
                    "label": "Cookie-Zustimmung",
                    "title": "Datenschutz Präferenz Zentrum",
                    "description": "Wir verwenden Cookies, damit die Website funktioniert, Sie sie funktionaler nutzen können und Ihre Erfahrung verbessert wird. Darüber hinaus können Cookies für personalisierte Produkt- und Serviceangebote verwendet werden. Nicht unbedingt erforderliche Cookies werden nicht verwendet, wenn Sie Ihre Zustimmung nicht erteilen.",
                    "acceptAllBtn": "Alle akzeptieren",
                    "acceptNecessaryBtn": "Alle ablehnen",
                    "showPreferencesBtn": "Einstellungen verwalten",
                    "closeIconLabel": "Alle ablehnen und schließen",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Datenschutz</a><a href=\"" + ccUrlKullanim + "\">Bedingungen und Konditionen</a>"
                },
                "preferencesModal": {
                    "title": "Präferenzen für die Zustimmung",
                    "acceptAllBtn": "Alle akzeptieren",
                    "acceptNecessaryBtn": "Alle ablehnen",
                    "savePreferencesBtn": "Einstellungen speichern",
                    "closeIconLabel": "Modal schließen",
                    "serviceCounterLabel":"Dienstleistungen",
                    "sections": [
                        {
                            "title": "",
                            "description": "Wir verwenden notwendige Cookies, damit die Website funktioniert. Darüber hinaus sollen Leistungs- und Analyse-Cookies dazu dienen, die Website funktionaler zu nutzen und Ihr Erlebnis zu verbessern. Werbe- und Marketing-Cookies sollen ebenfalls für personalisierte Produkt- und Serviceaktionen verwendet werden. Nicht unbedingt erforderliche Cookies werden nicht verwendet, wenn Sie Ihre Zustimmung nicht erteilen."
                        },
                        {
                            "title": "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            "description": "Pflicht-Cookies sind Cookies, die während Ihres Besuchs auf der Website auf Ihrem Gerät platziert werden und für das reibungslose Funktionieren der angebotenen Online-Dienste erforderlich sind.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Funktionalitäts Cookies",
                            "description": "Funktionscookies sind notwendig, um bestimmte Funktionen auf der Plattform bereitzustellen und Ihre Präferenzen im Zusammenhang mit diesen Funktionen zu speichern.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Analytische Cookies",
                            "description": "Leistungs- und Analyse-Cookies ermöglichen es uns, Website-Besuche und -Verkehr zu verfolgen und zu analysieren. Durch diese Cookies können wir Informationen sammeln, wie z. B. welche Bereiche der Website am häufigsten oder am seltensten besucht werden, um den Website-Verkehr zu optimieren.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Werbung Cookies",
                            "description": "Werbe-Cookies werden verwendet, um Produkt- und Serviceaktionen zu personalisieren, die auf Ihrer Ansichtsgeschichte und Ihrem Besucherprofil auf der Website oder anderen Medienkanälen basieren, sowohl auf der Website als auch außerhalb der Website.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Weitere Informationen",
                            "description": "Für Fragen zu unserer Cookie- und Präferenzrichtlinie können Sie uns unter <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">Kontaktieren Sie uns</a> kontaktieren."
                        }
                    ]
                }
            },
            ar: {
                "consentModal": {
                    "label": "موافقة ملفات تعريف الارتباط",
                    "title": "مركز تفضيلات الخصوصية",
                    "description": "نستخدم ملفات تعريف الارتباط لضمان عمل موقع الإنترنت، وتحسين قدرتك على استخدامه بشكل أكثر فعالية، وتعزيز تجربتك. كما يمكن استخدام ملفات تعريف الارتباط غير الضرورية لترويج منتجات وخدمات مخصصة لك. لن يتم استخدام ملفات تعريف الارتباط غير الضرورية إذا لم تعطي موافقتك.",
                    "acceptAllBtn": "رفض كل شيء",
                    "acceptNecessaryBtn": "قبول الكل",
                    "showPreferencesBtn": "إدارة التفضيلات",
                    "closeIconLabel": "رفض الكل وإغلاق",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">سياسة الخصوصية</a><a href=\"" + ccUrlKullanim + "\">الأحكام والشروط</a>"
                },
                "preferencesModal": {
                    "title": "مركز تفضيلات الموافقة",
                    "acceptAllBtn": "رفض كل شيء",
                    "acceptNecessaryBtn": "قبول الكل",
                    "savePreferencesBtn": "حفظ التفضيلات",
                    "closeIconLabel": "إغلاق مشروط",
                    "serviceCounterLabel": "خدمة|خدمات",
                    "sections": [
                        {
                            "title": "",
                            "description": "نستخدم ملفات تعريف الارتباط الضرورية لضمان عمل موقع الإنترنت. بالإضافة إلى ذلك، يُفضل استخدام ملفات تعريف الأداء والتحليل لتمكينك من استخدام الموقع بشكل أكثر وظائف وتعزيز تجربتك. كما يُرغب في استخدام ملفات تعريف الإعلانات والتسويق لترويج منتجات وخدمات مخصصة لك. لن يتم استخدام ملفات تعريف الارتباط غير الضرورية إذا لم تعطي موافقتك."
                        },
                        {
                            "title": "ملفات تعريف الارتباط الضرورية للغاية <span class=\"pm__badge\">ممكّن دائمًا</span>",
                            "description": "تعد ملفات تعريف الارتباط الأساسية ملفات تُوضع على جهازك أثناء زيارتك للموقع الإلكتروني، وهي ضرورية لضمان عمل الخدمات الإلكترونية المقدمة بشكل صحيح.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "ملفات تعريف الارتباط الوظيفية",
                            "description": "ملفات تعريف الارتباط الوظيفية ضرورية لتوفير وظائف معينة على النظام وتذكير تفضيلاتك المتعلقة بهذه الوظائف.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "ملفات تعريف الارتباط التحليلية",
                            "description": "تسمح لنا ملفات تعريف الارتباط الأداء والتحليل بتتبع وتحليل زيارات وحركة مرور موقع الويب. من خلال هذه الملفات ، يمكننا جمع معلومات مثل المناطق التي يتم زيارتها بشكل متكرر أو نادرًا على موقع الويب ، مما يمكننا من تحسين حركة المرور على الموقع.",
                            "linkedCategory": "analytics",
                        },
                        {
                            "title": "ملفات تعريف الارتباط للإعلان",
                            "description": "تُستخدم ملفات تعريف الارتباط الإعلانية لتخصيص ترويج المنتجات والخدمات وفقًا لتاريخ مشاهدتك وملف زائر على موقع الويب أو وسائط الإعلام الأخرى ، سواء على الموقع أو خارجه.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "معلومات اكثر",
                            "description": "للأسئلة المتعلقة بسياسة ملفات تعريف الارتباط وتفضيلاتك ، يمكنك الاتصال بنا على <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">اتصل بنا</a>."
                        }
                    ]
                }
            },
            es: {
                "consentModal": {
                    "label": "Consentimiento de cookies",
                    "title": "Centro de Preferencias de Privacidad",
                    "description": "Utilizamos cookies para que el sitio web funcione, para que lo utilice de manera más funcional y para mejorar su experiencia. Además, las cookies pueden utilizarse para promocionar productos y servicios personalizados. Las cookies no esenciales no se utilizarán si no otorga su consentimiento.",
                    "acceptAllBtn": "Aceptar todo",
                    "acceptNecessaryBtn": "Rechazar todo",
                    "showPreferencesBtn": "Gestionar preferencias",
                    "closeIconLabel": "Rechazar todo y cerrar",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Política de privacidad</a><a href=\"" + ccUrlKullanim + "\">Términos y condiciones</a>"
                },
                "preferencesModal": {
                    "title": "Preferencias de Consentimiento",
                    "acceptAllBtn": "Aceptar todo",
                    "acceptNecessaryBtn": "Rechazar todo",
                    "savePreferencesBtn": "Guardar preferencias",
                    "closeIconLabel": "Cerrar modal",
                    "serviceCounterLabel":"Servicios",
                    "sections": [
                        {
                            "title": "",
                            "description": "Utilizamos cookies necesarias para que el sitio web funcione. Además, se desea utilizar cookies de rendimiento y analíticas para que pueda utilizar el sitio web de manera más funcional y mejorar su experiencia. También se desea utilizar cookies publicitarias y de marketing para promociones personalizadas de productos y servicios. Las cookies no esenciales no se utilizarán si no otorga su consentimiento."
                        },
                        {
                            "title": "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            "description": "Las cookies esenciales son cookies que se colocan en su dispositivo durante su visita al sitio web y son necesarias para el funcionamiento adecuado de los servicios en línea proporcionados.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Cookies de Funcionalidad",
                            "description": "Las cookies de funcionalidad son necesarias para proporcionar funciones específicas en la plataforma y recordar sus preferencias relacionadas con estas funciones.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Cookies Analíticas",
                            "description": "Las cookies de rendimiento y analíticas nos permiten rastrear y analizar las visitas y el tráfico del sitio web. A través de estas cookies, podemos obtener información como qué áreas del sitio web se visitan con más frecuencia o menos frecuencia, lo que nos permite optimizar el tráfico del sitio web.",
                            "linkedCategory": "analytics",
                        },
                        {
                            "title": "Cookies Publicitarias",
                            "description": "Las cookies publicitarias se utilizan para personalizar promociones de productos y servicios adaptadas a su historial de visualización y perfil de visitante en el sitio web u otros canales de medios, tanto en el sitio web como fuera de él.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Más información",
                            "description": "Para preguntas sobre nuestra política de cookies y preferencias, puedes contactarnos en <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">contáctanos</a>."
                        }
                    ]
                }
            },
            fr: {
                "consentModal": {
                    "label": "Consentement aux cookies",
                    "title": "Centre de Préférences de Confidentialité",
                    "description": "Nous utilisons des cookies pour que le site web fonctionne, pour que vous puissiez l'utiliser de manière plus fonctionnelle et pour améliorer votre expérience. De plus, des cookies peuvent être utilisés pour des promotions personnalisées de produits et services. Les cookies non essentiels ne seront pas utilisés si vous ne donnez pas votre consentement.",
                    "acceptAllBtn": "Accepter tout",
                    "acceptNecessaryBtn": "Tout rejeter",
                    "showPreferencesBtn": "Gérer les préférences",
                    "closeIconLabel": "Tout rejeter et fermer",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Politique de confidentialité</a><a href=\"" + ccUrlKullanim + "\">Termes et conditions</a>"
                },
                "preferencesModal": {
                    "title": "Préférences de cookies",
                    "acceptAllBtn": "Accepter tout",
                    "acceptNecessaryBtn": "Tout rejeter",
                    "savePreferencesBtn": "Sauver les préférences",
                    "closeIconLabel": "Fermer la modale",
                    "serviceCounterLabel":"Services",
                    "sections": [
                        {
                            "title": "",
                            "description": "Nous utilisons des cookies nécessaires pour le bon fonctionnement du site web. De plus, des cookies de performance et d'analyse sont destinés à être utilisés pour que vous puissiez utiliser le site web de manière plus fonctionnelle et améliorer votre expérience. Des cookies publicitaires et marketing sont également prévus pour des promotions personnalisées de produits et services. Les cookies non essentiels ne seront pas utilisés si vous n'avez pas donné votre consentement."
                        },
                        {
                            "title": "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            "description": "Les cookies essentielles sont des cookies placés sur votre appareil lors de votre visite sur le site web, et ils sont nécessaires au bon fonctionnement des services en ligne fournis.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Cookies de Fonctionnalité",
                            "description": "Les cookies de fonctionnalité sont nécessaires pour fournir des fonctions spécifiques sur la plateforme et se souvenir de vos préférences liées à ces fonctions.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Cookies Analytiques",
                            "description": "Les cookies de performance et d'analyse nous permettent de suivre et d'analyser les visites et le trafic du site web. Grâce à ces cookies, nous pouvons recueillir des informations telles que les zones du site web les plus fréquemment ou rarement visitées, ce qui nous permet d'optimiser le trafic du site web.",
                            "linkedCategory": "analytics",
                        },
                        {
                            "title": "Cookies Publicitaires",
                            "description": "Les cookies publicitaires sont utilisés pour personnaliser les promotions de produits et services en fonction de votre historique de visionnage et de votre profil de visiteur sur le site web ou d'autres canaux de médias, à la fois sur le site web et en dehors.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Plus d'informations",
                            "description": "Pour toute question concernant notre politique en matière de cookies et de préférences, vous pouvez nous contacter à l'adresse suivante : <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">contactez-nous</a>."
                        }
                    ]
                }
            },
            it: {
                "consentModal": {
                    "label": "Consenso sui cookie",
                    "title": "Centro Preferenze Privacy",
                    "description": "Utilizziamo i cookie affinché il sito web funzioni, affinché tu lo utilizzi in modo più funzionale e per migliorare la tua esperienza. Inoltre, i cookie possono essere utilizzati per promuovere prodotti e servizi personalizzati. I cookie non essenziali non saranno utilizzati se non fornisci il tuo consenso.",
                    "acceptAllBtn": "Accetta tutto",
                    "acceptNecessaryBtn": "Rifiuta tutto",
                    "showPreferencesBtn": "Gestisci preferenze",
                    "closeIconLabel": "Rifiuta tutto e chiudi",
                    "footer": "<a href=\"" + ccUrlGizlilik + "\">Informativa sulla privacy</a><a href=\"" + ccUrlKullanim + "\">Termini e condizioni</a>"
                },
                "preferencesModal": {
                    "title": "Centro preferenze per il consenso",
                    "acceptAllBtn": "Accetta tutto",
                    "acceptNecessaryBtn": "Rifiuta tutto",
                    "savePreferencesBtn": "Salva le preferenze",
                    "closeIconLabel": "Chiudi la finestra",
                    "serviceCounterLabel":"Servizi",
                    "sections": [
                        {
                            "title": "",
                            "description": "Utilizziamo cookie necessari affinché il sito web funzioni. Inoltre, si intende utilizzare cookie di performance e analitici per consentirti di utilizzare il sito web in modo più funzionale e migliorare la tua esperienza. Sono previsti anche cookie pubblicitari e di marketing per promozioni personalizzate di prodotti e servizi. I cookie non essenziali non saranno utilizzati se non fornisci il tuo consenso."
                        },
                        {
                            "title": "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            "description": "I cookie essenziali sono cookie che vengono posizionati sul tuo dispositivo durante la visita al sito web e sono necessari per il corretto funzionamento dei servizi online forniti.",
                            "linkedCategory": "necessary"
                        },
                        {
                            "title": "Cookie di Funzionalità",
                            "description": "I cookie di funzionalità sono necessari per fornire funzioni specifiche sulla piattaforma e ricordare le tue preferenze relative a queste funzioni.",
                            "linkedCategory": "functionality"
                        },
                        {
                            "title": "Cookie Analitici",
                            "description": "I cookie di prestazione e analitici ci consentono di tracciare e analizzare le visite e il traffico del sito web. Attraverso questi cookie, possiamo raccogliere informazioni come quali aree del sito web vengono visitate più frequentemente o raramente, consentendoci di ottimizzare il traffico del sito web.",
                            "linkedCategory": "analytics"
                        },
                        {
                            "title": "Cookie Pubblicitari",
                            "description": "I cookie pubblicitari vengono utilizzati per personalizzare promozioni di prodotti e servizi in base alla tua cronologia di visualizzazione e al profilo del visitatore sul sito web o su altri canali media, sia sul sito web che al di fuori di esso.",
                            "linkedCategory": "marketing"
                        },
                        {
                            "title": "Ulteriori informazioni",
                            "description": "Per domande sulla nostra politica sui cookie e sulle preferenze, puoi contattarci all'indirizzo <a class=\"cc__link\" href=\"" + ccUrlIletisim + "\">contattaci</a>."
                        }
                    ]
                }
            }
        }
    }
});
