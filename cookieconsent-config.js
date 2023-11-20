const im = iframemanager();

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: 'box inline',
            position: 'bottom left',
            flipButtons: false,
            equalWeightButtons: true
        },
        preferencesModal: {
            layout: 'box',
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
                    label: 'Youtube Embed',
                    onAccept: () => {
                        console.log('services-youtube-onAccept');

                        im.acceptService('youtube')
                    },
                    onReject: () => {
                        console.log('services-youtube-onReject');

                        im.rejectService('youtube')
                    }
                },
                vimeo: {
                    label: 'Vimeo Embed',
                    onAccept: () => {
                        console.log('services-vimeo-onAccept');

                        im.acceptService('vimeo')
                    },
                    onReject: () => {
                        console.log('services-vimeo-onReject');

                        im.rejectService('vimeo')
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
        default: 'tr',
        translations: {
            en: 'lang/en.json',
            tr: {
                "consentModal": {
                    "label": "Çerez Yönetimi",
                    "title": "Gizlilik Tercihi Merkezi",
                    "description": "İnternet Sitesi’nin çalışabilmesi, daha işlevsel kullanabilmeniz ve deneyiminizin iyileştirilmesi, size yönelik kişiselleştirilmiş ürün ve hizmet tanıtımı yapılabilmesi amacıyla çerezler kullanmaktayız. Zorunlu olmayan çerezler onay vermediğiniz durumda kullanılmayacaktır.",
                    "acceptAllBtn": "Tümünü Kabul Et",
                    "closeIconLabel": "Tümünü Reddet ve Kapat",
                    "acceptNecessaryBtn": "Tümünü Reddet",
                    "showPreferencesBtn": "Çerez Tercihlerimi Yönet",
                    "footer": '<a href="' + cerezUrlGizlilik + '">Gizlilik Politikası</a><a href="' + cerezUrlKullanim + '">Kullanım Koşulları</a>'
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
                            "description": 'Çerezlere ve tercihlerinize ilişkin politikamızla ilgili sorularınız için bizimle <a class="cc__link" href="' + cerezUrlIletisim + '">iletişime geçebilirsiniz</a>.'
                        }
                    ]
                }
            }
        }
    }
});

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
    currLang: 'tr',
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
                }
            }
        }
    }
});
