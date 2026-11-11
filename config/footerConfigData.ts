

interface ServiceConfig {
    service: string,
    navigateTo: string,

}
interface FooterConfigTypes {
    id: number | string
    service_title: string
    services: ServiceConfig[]
}


export const footerConfig: FooterConfigTypes[] = [

    {
        id: "pages",
        service_title: "Pages",
        services: [
            { service: "Home", navigateTo: "/" },
            { service: "Lokalhost.io", navigateTo: "/" },
            { service: "Components", navigateTo: "/" },
            { service: "Templates", navigateTo: "/" },
            { service: "Designs", navigateTo: "/" },
            { service: "Authentication kits", navigateTo: "/" },
            { service: "SASS kits", navigateTo: "/" },
            { service: "3D designs and patterns", navigateTo: "/" },
            { service: "Mobile apps", navigateTo: "/" },
            { service: "React Native/Flutter elements", navigateTo: "/" },

        

        ] 
    },

    {
        id: "services",
        service_title: "Services",
        services: [
           { service: "Web components", navigateTo: "/" },
            { service: "Web templats", navigateTo: "/" },
            { service: "Authentication kits", navigateTo: "/" },
            { service: "SASS kits", navigateTo: "/" },
            { service: "Design kits figma", navigateTo: "/" },
            { service: "Mobile apps alocks", navigateTo: "/" },
            { service: "Mobile apps", navigateTo: "/" },
            { service: "Themes/icons", navigateTo: "/" },
            { service: "3D animations & patterns", navigateTo: "/" },
          
        ] 
    },
    {
        id: "insp",
        service_title: "Design Inspiration",
        services: [
           { service: "@lokalhost.io", navigateTo: "https://lokalhost-io-eta.vercel.app/" },
           { service: "@shadncUI", navigateTo: "https://ui.shadcn.com/" },
            { service: "@shadcn stdio", navigateTo: "https://shadcnstudio.com/" },
            { service: "@aceternity ui", navigateTo: "https://ui.aceternity.com/" },
            { service: "@ChánhĐại", navigateTo: "https://chanhdai.com/" },
            { service: "@reactbits", navigateTo: "https://www.reactbits.dev/" },
            { service: "@magicui", navigateTo: "https://magicui.design/" },

          
        ] 
    },


]



interface SocialLinks {
    id: number | string,
    social: string,
    socialIcon?: string,
    link: string,
}

export const socialLinks: SocialLinks[] = [
    {
        id: 1,
        social: "Github",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 2,
        social: "X",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 3,
        social: "Instagram",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 4,
        social: "Discord",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
]