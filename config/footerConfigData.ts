

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
            { service: "Docs", navigateTo: "/docs" },
            { service: "Components", navigateTo: "/about" },
            { service: "Templates", navigateTo: "/pricing" },
            { service: "Mobile Apps", navigateTo: "/docs" },
            { service: "Mobile UI Blocks", navigateTo: "/blog" },
        

        ] 
    },

    {
        id: "web-components",
        service_title: "Web Components",
        services: [
           { service: "Button", navigateTo: "/components/button" },
            { service: "Card", navigateTo: "/components/card" },
            { service: "Modal", navigateTo: "/components/modal" },
            { service: "Tooltip", navigateTo: "/components/tooltip" },
            { service: "Avatar", navigateTo: "/components/avatar" },
            { service: "Input", navigateTo: "/components/input" },
            { service: "Dropdown", navigateTo: "/components/dropdown" },
            { service: "Toast", navigateTo: "/components/toast" },
            { service: "Badge", navigateTo: "/components/badge" },
    

        ] 
    },

    {
        id: "web-templates",
        service_title: "Web Templates",
        services: [
           { service: "Landing", navigateTo: "/templates/landing" },
            { service: "Dashboard", navigateTo: "/templates/dashboard" },
            { service: "E-commerce", navigateTo: "/templates/ecommerce" },
            { service: "Blog", navigateTo: "/templates/blog" },
            { service: "Portfolio", navigateTo: "/templates/portfolio" },
            { service: "SaaS", navigateTo: "/templates/saas" },
            { service: "Admin Panel", navigateTo: "/templates/admin" },
            { service: "Docs Site", navigateTo: "/templates/docs" },
            { service: "Marketing Site", navigateTo: "/templates/marketing" },
   
        ] 
    },


    {
        id: "mobile-apps",
        service_title: "Mobile Apps",
        services: [
           { service: "Business App", navigateTo: "/mobile/business" },
            { service: "Health & Wellness", navigateTo: "/mobile/health" },
            { service: "Education / Learning", navigateTo: "/mobile/education" },
            { service: "E-commerce App", navigateTo: "/mobile/ecommerce" },
            { service: "Food Delivery", navigateTo: "/mobile/food-delivery" },
            { service: "Fitness Tracker", navigateTo: "/mobile/fitness" },
            { service: "Telemedicine", navigateTo: "/mobile/telemedicine" },
            { service: "Booking & Reservations", navigateTo: "/mobile/booking" },
            { service: "Social Network", navigateTo: "/mobile/social" },
      
          
        ] 
    },



    {
        id: "mobile-ui-blocks",
        service_title: "Mobile UI Blocks",
        services: [
           { service: "Auth Form", navigateTo: "/blocks/auth-form" },
            { service: "Profile Card", navigateTo: "/blocks/profile-card" },
            { service: "Chat UI", navigateTo: "/blocks/chat-ui" },
            { service: "Feed Item", navigateTo: "/blocks/feed-item" },
            { service: "Settings List", navigateTo: "/blocks/settings-list" },
            { service: "Onboarding Steps", navigateTo: "/blocks/onboarding" },
            { service: "Bottom Sheet", navigateTo: "/blocks/bottom-sheet" },
            { service: "Floating Action", navigateTo: "/blocks/fab" },
            { service: "Tab Bar", navigateTo: "/blocks/tab-bar" },

     
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