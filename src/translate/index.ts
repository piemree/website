import i18next from "i18next";

i18next.init({
  lng: "tr",
  resources: {
    en: {
      translation: {
        title: "Hi, I'm Emre",
        desc: "I'm a software Full Stack Develper based in Bursa, Turkey. I'm passionate about building software that helps people and businesses.",
        skills: "Skills",
        frontend: "Frontend",
        backend: "Backend",
        versionControl: "Version Control",
        contact: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        form: {
          success: "Your message has been sent successfully.",
          error:
            "An error occurred while sending your message. Please try again later.",
        },
        page: {
          title: "Emre Demir | Full Stack Developer",
          desc: "Talented Full Stack Developer",
          keywords:
            "Emre Demir, Developer, Software Developer, Web Developer, Fullstack Developer, Software Engineer, Coding, Programming, React Developer, Nodejs Developer, Express Developer, Experienced Developer, New Developer, Bursa Developer, Affordable Developer, Fast Developer, Reliable Developer, Creative Developer, Problem Solver Developer",
        },
      },
    },
    tr: {
      translation: {
        title: "Merhaba, Ben Emre",
        desc: "Bursa, Türkiye'de yaşayan bir Full Stack Develper'ım. İnsanlara ve işletmelere yardımcı olan yazılımlar geliştirmekten keyif alıyorum.",
        skills: "Yeteneklerim",
        frontend: "Frontend",
        backend: "Backend",
        versionControl: "Versiyon Kontrol",
        contact: "İletişim",
        name: "İsim",
        email: "Email",
        message: "Mesaj",
        send: "Gönder",
        form: {
          success: "Mesajınız başarıyla gönderildi.",
          error:
            "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        },
        page: {
          title: "Emre Demir | Full Stack Developer",
          desc: "Yetenekli Full Stack Developer",
          keywords:
            "Emre Demir, Geliştirici, Developer, Yazılım Geliştirici, Web Developer, Fullstack Geliştirici, Yazılım Mühendisi, Kodlama, Programlama, Nodejs Developer, Express Developer, React Geliştirici, Deneyimli Yazılımcı, Yeni Geliştirici, Bursa Geliştirici, Bursa Developer, Bursa Web Developer, Uygun Fiyatlı Yazılımcı, Hızlı Yazılımcı, Güvenilir Geliştirici, Yaratıcı Geliştirici, Sorun Çözücü Geliştirici",
        },
      },
    },
  },
});

export default i18next;
