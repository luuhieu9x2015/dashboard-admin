import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // Variable
    :root {
        //* Color
        --color-white-1: #fff;
        --color-black-1: #1D1D1F;
        --color-blue-1: #147ce5; // a nav ip13pro 

        // Text color
        --text-color-white-1: #fff;

        --text-color-black-1: #1F1F1F; // text nav ip13pro

        --text-color-grey-1: #d6d6d6; // with navigation
        --text-color-grey-2: #5B5B5D;
        --text-color-grey-3: #1d1d1f; // text title footer
        --text-color-grey-4: #424245; // text subtitle footer
        --text-color-grey-5: #6e6e73; // text term footer
        --text-color-grey-6: #A6A6A6; // text nav ip13pro
        --text-color-grey-7: #868686; // text nav ip13pro 
        --text-color-grey-8: #747476; // text ribbon ip13pro
        --text-color-grey-9: #86868b; // text bring on the night sub
        
        --text-color-blue-1: #0066cc; // with bg grey
        --text-color-blue-2: #1472D0; // with bg white
        --text-color-blue-3: #2B83DB; // with bg purple
        --text-color-blue-4: #06c;
        --text-color-blue-5: #2A92F7;
        
        --text-color-pink-1: #FEC2EB;

        --text-color-orange-1: #bf4800; // with title "new"

        // Gutter
        --gutter-color-1: #fff;
        --gutter-width-1: 12px;

        // Back ground
        --bg-white-1: #FBFBFD;
        --bg-white-2: rgba(255, 255, 255, 0.72); // nav with ip13pro

        --bg-black-1: #333;
        --bg-black-2: rgba(0, 0, 0, 0.9); // bg navigation
        --bg-black-3: #000; // bg ip13pro collection

        --bg-grey-1: #EEEFFE;
        --bg-grey-2: #F5F5F7; // footer, ribbon ip13pro
        --bg-grey-3: #FBFBFD; // bg ip13pro collection

        --bg-color-blue-1: #147ce5;
        --bg-color-blue-2: #0066cc;

        --footer-border-color: #d2d2d7;

        //* Break Point
        $bp-small: 600px;
        $bp-medium: 1024px;
        $bp-large: 1440px;
        $bp-xlarge: 1920px;
    }

    // animation
    @keyframes rotate20 {
        from {transform: rotate(0deg);}
        to {transform: rotate(20deg);}
    }

    // Reset, setup Global
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }


    html,
    body {
        height: 100%;
        width: 100%;
        font-size: 10px;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #root {
        min-height: 100%;
        min-width: 100%;
    }



    // Components css
    .link-arrow {
        font-weight: 400;
        text-decoration: none;
        color: var(--text-color-blue-1);
        
        &:hover {
            text-decoration: underline var(--text-color-blue-4);
            text-decoration-thickness: 2px;

        } 
    }

    .icon-arrow {
        color: var(--text-color-blue-1);
        margin-left: 5px;
    }

`;
