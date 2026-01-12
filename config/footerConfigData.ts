

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
           { service: "@shadncUI", navigateTo: "https://ui.shadcn.com/" },
            { service: "@shadcn stdio", navigateTo: "https://shadcnstudio.com/" },
            { service: "@aceternity ui", navigateTo: "https://ui.aceternity.com/" },
            { service: "@ChánhĐại", navigateTo: "https://chanhdai.com/" },
            { service: "@reactbits", navigateTo: "https://www.reactbits.dev/" },
            { service: "@magicui", navigateTo: "https://magicui.design/" },

          
        ] 
    },


]


    // {
    //     id: "web-components",
    //     service_title: "Web Services",
    //     services: [
    //        { service: "Button", navigateTo: "/components/button" },
    //         { service: "Card", navigateTo: "/components/card" },
    //         { service: "Modal", navigateTo: "/components/modal" },
    //         { service: "Tooltip", navigateTo: "/components/tooltip" },
    //         { service: "Avatar", navigateTo: "/components/avatar" },
    //         { service: "Input", navigateTo: "/components/input" },
    //         { service: "Dropdown", navigateTo: "/components/dropdown" },
    //         { service: "Toast", navigateTo: "/components/toast" },
    //         { service: "Badge", navigateTo: "/components/badge" },
    

    //     ] 
    // },

    // {
    //     id: "web-templates",
    //     service_title: "Templates",
    //     services: [
    //        { service: "Landing", navigateTo: "/templates/landing" },
    //         { service: "Dashboard", navigateTo: "/templates/dashboard" },
    //         { service: "E-commerce", navigateTo: "/templates/ecommerce" },
    //         { service: "Blog", navigateTo: "/templates/blog" },
    //         { service: "Portfolio", navigateTo: "/templates/portfolio" },
    //         { service: "SaaS", navigateTo: "/templates/saas" },
    //         { service: "Admin Panel", navigateTo: "/templates/admin" },
    //         { service: "Docs Site", navigateTo: "/templates/docs" },
    //         { service: "Marketing Site", navigateTo: "/templates/marketing" },
   
    //     ] 
    // },



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