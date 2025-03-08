/**
 * kamp.us Bülten - Newsletter subscription service
 * 
 * This worker serves a newsletter subscription page and handles form submissions
 * for the kamp.us Bülten newsletter using Mailchimp for email management.
 */

// Import HTML and CSS as strings
const htmlTemplate = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kamp.us Bülten</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="subscription-box">
            <div class="logo-container">
                <!-- Koala image -->
                <img src="koala.svg" alt="kamp.us Koala" class="logo" width="200" height="200">
                <h1 class="title">kamp.us Bülten</h1>
                <p class="tagline">sınırlarını zorla, potansiyelini keşfet</p>
            </div>
            
            <div class="subscription-form">
                <h2 class="form-title">kamp.us Bülten'e Abone Ol</h2>
                
                <form id="subscription-form" method="POST">
                    <div class="form-group">
                        <label for="email">Email Adresi</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <button type="submit" class="subscribe-button">hemen abone olayım</button>
                </form>
                
                <div id="success-message" class="message success-message" style="display: none;">
                    Abone olduğunuz için teşekkürler!
                </div>
                
                <div id="error-message" class="message error-message" style="display: none;">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('subscription-form');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                
                try {
                    const response = await fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email }),
                    });
                    
                    if (response.ok) {
                        form.style.display = 'none';
                        successMessage.style.display = 'block';
                    } else {
                        const data = await response.json();
                        errorMessage.textContent = data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.';
                        errorMessage.style.display = 'block';
                    }
                } catch (error) {
                    errorMessage.textContent = 'Bağlantı hatası. Lütfen tekrar deneyin.';
                    errorMessage.style.display = 'block';
                }
            });
        });
    </script>
</body>
</html>`;

const styles = `/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0f1a2b;
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
}

.subscription-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
}

/* Logo and Title Styles */
.logo-container {
    margin-bottom: 40px;
}

.logo {
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
    display: block;
}

.title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #ffffff;
}

.tagline {
    font-size: 1.2rem;
    color: #a0a0a0;
    margin-bottom: 30px;
}

/* Form Styles */
.subscription-form {
    width: 100%;
    max-width: 600px;
}

.form-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #a0a0a0;
}

input[type="email"] {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    font-size: 1rem;
    color: #333333;
}

.subscribe-button {
    width: 100%;
    padding: 15px;
    background-color: #ff6b00;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: lowercase;
}

.subscribe-button:hover {
    background-color: #ff8124;
}

/* Message Styles */
.message {
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
}

.success-message {
    background-color: rgba(39, 174, 96, 0.2);
    color: #27ae60;
}

.error-message {
    background-color: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }
    
    .form-title {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 2rem;
    }
    
    .tagline {
        font-size: 1rem;
    }
    
    .form-title {
        font-size: 1.3rem;
    }
    
    .subscription-box {
        padding: 20px 10px;
    }
}`;

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Define the shape of the request data
interface SubscriptionRequest {
    email: string;
}

// Function to subscribe email to Mailchimp
async function subscribeToMailchimp(email: string, env: Env): Promise<{ success: boolean; error?: string }> {
    try {
        const { MAILCHIMP_USER_ID, MAILCHIMP_LIST_ID, MAILCHIMP_DATACENTER } = env;
        
        // Construct the Mailchimp API URL
        const mailchimpUrl = `https://${MAILCHIMP_DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
        
        // Prepare the request body
        const data = {
            email_address: email,
            status: 'subscribed',
        };
        
        // Make the request to Mailchimp API
        const response = await fetch(mailchimpUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_USER_ID}`)}`,
            },
            body: JSON.stringify(data),
        });
        
        // Parse the response
        const result = await response.json();
        
        if (response.ok) {
            return { success: true };
        } else {
            // Check if the error is because the email is already subscribed
            if (typeof result === 'object' && result !== null && 'title' in result && result.title === 'Member Exists') {
                return { success: true }; // Consider this a success
            }
            
            console.error('Mailchimp API error:', result);
            
            let errorMessage = 'Mailchimp aboneliği sırasında bir hata oluştu.';
            if (typeof result === 'object' && result !== null && 'detail' in result && typeof result.detail === 'string') {
                errorMessage = result.detail;
            }
            
            return { 
                success: false, 
                error: errorMessage
            };
        }
    } catch (error) {
        console.error('Error subscribing to Mailchimp:', error);
        return { 
            success: false, 
            error: 'Mailchimp aboneliği sırasında bir hata oluştu.' 
        };
    }
}

// Read the SVG file as a string
const koalaSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200px" height="200px" viewBox="0 0 1820 1865" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Posters" transform="translate(-5464, -7223)">
            <g id="Group" transform="translate(5464, 7223)">
                <path d="M1000,1494.5 C1000,1542.82492 1041.1898,1582 1092,1582 C1142.8102,1582 1184,1542.82492 1184,1494.5 C1184,1446.17508 1142.8102,1407 1092,1407 C1041.1898,1407 1000,1446.17508 1000,1494.5" id="Path" stroke="#000000" stroke-width="32" fill="#FFAE2E" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M418.164417,230.46357 C409.74158,240.432104 397.048033,245.761159 384.029205,244.79435 C371.010377,243.82754 359.244242,236.682051 352.387972,225.578854 C316.081816,160.381646 284.016412,92.914226 256.391017,23.5958451 C247.71263,4.88150669 226.400304,-4.38721084 206.783766,2.02168249 L67.9812119,47.5716598 C48.9599165,53.838466 37.32031,72.9969697 40.5302372,92.7552833 C234.316198,1284.99236 304.124759,1487.83019 387.61808,1804.48191 C390.752302,1816.38494 399.106986,1826.23144 410.344555,1831.26644 C497.567837,1870.78236 596.538907,1875.77182 687.298008,1845.22858 C705.764021,1839.5237 717.675065,1821.63298 715.807922,1802.4059 L574.806032,376.313051 C619.234868,315.129282 651.074851,245.742597 668.481465,172.172625 C671.737403,154.022922 662.379742,135.952564 645.673533,128.128769 L559.736506,88.3183329 C541.889288,80.0339824 520.668115,85.6875538 509.314686,101.751302 C478.686892,144.981039 450.38062,192.322079 418.164417,230.46357 Z" id="Path" stroke="#000000" stroke-width="32" fill="#7D5110" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1034,1466.27092 C1034.28424,1625.88343 894.182632,1655 762.214641,1655 C630.24665,1655 556.027364,1602.13471 556.027364,1466.27092 C554.035774,1332.29239 661.007283,1222.05078 794.993131,1220 C927.001791,1220 1033.55222,1250.45854 1034,1466.27092 Z" id="Path" stroke="#555052" stroke-width="4" fill="#FFAE2E" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M676,1287.53602 C606.764511,1289.12317 573.898018,1289.65222 557.444407,1278.17591 L557.444407,1278.17591 C535.127063,1262.64697 507.257845,1257.32436 480.782382,1263.53458 C454.306919,1269.7448 431.718847,1286.90294 418.647616,1310.73281 L418.647616,1310.73281 C400.617043,1345.50309 408.387219,1388.0563 437.544832,1414.22303 L437.544832,1414.22303 C461.715493,1436.25368 492.261673,1450.04754 524.781548,1453.61687 L660.360925,1469" id="Path" stroke="#000000" stroke-width="32" fill="#FFAE2E" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M649.238744,1468 C634.791356,1472.0737 632.959997,1481.48394 618.309124,1485.43542 C601.358226,1490.11654 584.040372,1493.3464 566.542708,1495.09008 C548.951166,1494.47593 531.369496,1496.56418 514.410021,1501.2821 C482.797043,1513.74121 462.882084,1545.25545 465.179732,1579.18612 C467.477379,1613.11679 491.458689,1641.6527 524.462147,1649.72761 C552.662884,1657.67086 582.63591,1656.61714 610.210448,1646.71308 L668,1625.89649" id="Path" stroke="#000000" stroke-width="32" fill="#FFAE2E" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M65.8051962,474.685152 C163.253943,355.281667 407.445686,305.672653 536.48183,401.43148 C665.517974,497.190308 678.380883,742.590108 580.932136,861.993592 C544.999103,902.57213 497.958892,931.732365 445.627359,945.869046 C371.299284,1114.18971 203.023127,1004.39059 206.198149,983.960956 C163.794989,1000.94932 115.633046,994.938088 78.7088105,968.04863 C33.989681,935.808791 17.5477354,876.914591 39.1024484,826.180686 C-21.4466975,713.861792 -11.0169862,576.572665 65.8051962,474.685152 L65.8051962,474.685152 Z" id="Path" fill="#FFAE2E" fill-rule="nonzero"></path>
                <path d="M65.7022278,583.504562 C163.21476,464.052672 407.566338,414.423547 536.686941,510.221194 C596.868329,560.520202 634.536208,632.70026 641.368314,710.814058 C656.887226,595.514892 622.794499,465.151923 536.686941,401.395392 C407.566338,305.679171 163.21476,355.308296 65.7022278,474.67876 C11.2486462,546.306665 -10.7701315,637.425566 4.97073872,726 C12.3634483,674.000375 33.3077304,624.858411 65.7022278,583.504562 L65.7022278,583.504562 Z" id="Path" fill="#F58D47" fill-rule="nonzero"></path>
                <path d="M536.48183,401.43148 C665.517974,497.190308 678.380883,742.590108 580.932136,861.993592 C544.999103,902.57213 497.958892,931.732365 445.627359,945.869046 C371.299284,1114.18971 203.023127,1004.39059 206.198149,983.960956 C163.794989,1000.94932 115.633046,994.938088 78.7088105,968.04863 C33.989681,935.808791 17.5477354,876.914591 39.1024484,826.180686 C-21.4466975,713.861792 -11.0169862,576.572665 65.8051962,474.685152 C163.253943,355.281667 407.445686,305.672653 536.48183,401.43148 Z" id="Path" stroke="#000000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1820,744.098007 C1820,571.592615 1636.82464,364 1450.31143,364 C1263.79821,364 1072.03397,576.355033 1072.03397,748.860426 C1074.40336,809.007169 1095.41367,866.929624 1132.15619,914.608882 C1081.1726,935.957184 1047.72068,985.525969 1047,1040.79263 C1048.93283,1119.50573 1114.25231,1181.78143 1192.97041,1179.96109 C1244.81087,1180.28758 1292.9659,1153.20021 1319.60563,1108.72833 C1346.32953,1152.95002 1394.36808,1179.82978 1446.03734,1179.47264 C1509.8385,1180.29359 1566.63055,1139.1855 1585.77978,1078.32212 C1720.93753,1020.36696 1811.65478,890.916611 1820,744.098007 L1820,744.098007 Z" id="Path" fill="#FFAE2E" fill-rule="nonzero"></path>
                <path d="M1430.4701,486.539058 C1611.74052,486.539058 1789.5508,682.674781 1799.27989,852 C1812.49988,817.467861 1819.51429,780.873835 1820,743.903627 C1820,571.486453 1636.81633,364 1450.29464,364 C1263.77295,364 1072,576.246436 1072,748.66361 C1072,754.277949 1073.22122,759.932972 1073.6283,765.587995 C1128.5834,622.910546 1281.15505,486.539058 1430.4701,486.539058 L1430.4701,486.539058 Z" id="Path" fill="#F58D47" fill-rule="nonzero"></path>
                <path d="M1680,755.967329 C1680,893.870322 1539.73792,1019 1404.03589,1019 C1268.33386,1019 1147.85912,956.353803 1147.85912,818.450809 C1147.85912,680.547816 1278.1461,515.3083 1413.92956,515.3083 C1549.71302,515.3083 1680,618.105015 1680,755.967329 Z M606.883153,694.216077 C609.817436,755.733342 587.204822,815.732286 544.388103,860.036665 C501.571385,904.341043 442.348778,929.020671 380.7131,928.244372 C248.217856,931.314451 138.266415,826.591713 135,694.216077 C138.200187,561.792341 248.171318,456.996231 380.7131,460.065744 C442.371039,459.287551 501.613778,483.983709 544.434417,528.315251 C587.255057,572.646792 609.852201,632.678188 606.883153,694.216077 L606.883153,694.216077 Z" id="Shape" stroke="#E06212" stroke-width="4" fill="#E26610" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1594.87714,403.401005 C1549.17183,378.650235 1499.85941,364 1450.31143,364 C1263.79821,364 1072.03397,576.355033 1072.03397,748.860426 C1074.40336,809.007169 1095.41367,866.929624 1132.15619,914.608882 C1081.1726,935.957184 1047.72068,985.525969 1047,1040.79263 C1048.93283,1119.50573 1114.25231,1181.78143 1192.97041,1179.96109 C1244.81087,1180.28758 1292.9659,1153.20021 1319.60563,1108.72833 C1346.32953,1152.95002 1394.36808,1179.82978 1446.03734,1179.47264 C1509.8385,1180.29359 1566.63055,1139.1855 1585.77978,1078.32212 C1720.93753,1020.36696 1811.65478,890.916611 1820,744.098007 C1820,617.419361 1721.22011,471.819436 1594.87714,403.401005 Z" id="Path" stroke="#000000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1363.40459,907.017026 C1341.37512,1180.32671 1125.19314,1296 814.988905,1296 C504.784667,1296 207,1176.50078 207,902.37707 C207,628.253356 490.939899,335 801.144137,335 C1111.34837,335 1388.61021,594.715429 1363.40459,907.017026 Z" id="Path" fill="#FFAE2E" fill-rule="nonzero"></path>
                <path d="M801.146576,335 C490.941065,335 207,628.436717 207,902.772556 C207,909.859023 208.018002,916.456767 208.425203,923.135965 C271.256274,686.920426 519.037915,468.054511 786.894551,468.054511 C1078.57243,468.054511 1340.93186,697.835213 1350.37891,985 C1356.84001,959.456421 1361.19806,933.426388 1363.40934,907.171053 C1388.57434,594.918546 1111.35209,335 801.146576,335 L801.146576,335 Z" id="Path" fill="#F58D47" fill-rule="nonzero"></path>
                <path d="M1363.40459,907.017026 C1341.37512,1180.32671 1125.19314,1296 814.988905,1296 C504.784667,1296 207,1176.50078 207,902.37707 C207,628.253356 490.939899,335 801.144137,335 C1111.34837,335 1388.61021,594.715429 1363.40459,907.017026 Z" id="Path" stroke="#000000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M586,1153.48405 C595.598193,1164.30465 609.224834,1170.67736 623.66431,1171.09837 C638.188532,1171.47983 651.755569,1163.8611 659.015187,1151.24666 C663.626684,1131.39197 667.015295,1111.27175 669.161822,1091 M741,1166.37952 C729.637183,1175.4337 715.085027,1179.45832 700.697565,1177.52576 C686.44596,1175.4364 674.514289,1165.62183 669.689447,1152.01958 C668.264359,1131.70985 668.08815,1111.33144 669.161822,1091" id="Shape" stroke="#000000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M453,781 C453,802.539105 471.132468,820 493.5,820 C515.867532,820 534,802.539105 534,781 C534,759.460895 515.867532,742 493.5,742 C471.132468,742 453,759.460895 453,781" id="Path" fill="#000000" fill-rule="nonzero"></path>
                <path d="M890,827 C890,848.539105 908.132468,866 930.5,866 C952.867532,866 971,848.539105 971,827 C971,805.460895 952.867532,788 930.5,788 C908.132468,788 890,805.460895 890,827" id="Path" fill="#000000" fill-rule="nonzero"></path>
                <path d="M941.678676,1218.02482 C985.320407,1259.06824 1018.87705,1309.64417 1039.72631,1365.80031 C1056.74518,1410.53476 1070.3399,1456.49707 1080.3931,1503.29047 C1082.36514,1511.7867 1079.45019,1520.67451 1072.82885,1526.35419 C1066.20751,1532.03387 1056.97719,1533.56408 1048.87634,1530.32505 C995.068792,1512.58148 945.115099,1484.79865 901.662554,1448.44889 C879.344262,1425.70589 859.646958,1400.53322 842.939708,1373.40252 C815.204956,1331.48875 788.28354,1289.04649 761.362125,1246.60423 L742.045399,1216.19541 C736.53652,1207.08192 730.23597,1198.47081 723.216675,1190.46174 C717.651547,1184.44627 715.643309,1175.95708 717.923583,1168.08688 C720.203858,1160.21668 726.43972,1154.11453 734.359376,1152.00352 C813.659618,1130.57913 902.191222,1182.73757 941.678676,1218.02482 L941.678676,1218.02482 Z" id="Path" stroke="#000000" stroke-width="32" fill="#55A812" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M828.683502,981.013031 C812.012368,1099.6632 749.4039,1101.00687 673.792763,1091.35687 C598.181626,1081.70688 538.100324,1064.72777 554.812219,946.0776 C571.524115,827.42743 646.320038,739.070921 721.931175,748.720918 C797.542312,758.370914 845.354637,862.362861 828.683502,981.013031 Z" id="Path" stroke="#555052" stroke-width="4" fill="#000000" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </g>
    </g>
</svg>`;

export default {
	async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		
		// Handle CSS requests
		if (url.pathname === '/styles.css') {
			return new Response(styles, {
				headers: {
					'Content-Type': 'text/css',
				},
			});
		}
		
		// Handle SVG requests
		if (url.pathname === '/koala.svg') {
			return new Response(koalaSvg, {
				headers: {
					'Content-Type': 'image/svg+xml',
				},
			});
		}
		
		// Handle form submissions
		if (request.method === 'POST') {
			try {
				const rawData = await request.json();
				// Type guard to ensure data has the expected structure
				if (typeof rawData === 'object' && rawData !== null && 'email' in rawData) {
					const data = rawData as SubscriptionRequest;
					const email = data.email;
					
					// Validate email
					if (!email || !EMAIL_REGEX.test(email)) {
						return new Response(
							JSON.stringify({ error: 'Geçerli bir email adresi giriniz.' }),
							{
								status: 400,
								headers: {
									'Content-Type': 'application/json',
								},
							}
						);
					}
					
					try {
						// Subscribe to Mailchimp
						const mailchimpResult = await subscribeToMailchimp(email, _env);
						
						if (mailchimpResult.success) {
							return new Response(
								JSON.stringify({ success: true }),
								{
									status: 200,
									headers: {
										'Content-Type': 'application/json',
									},
								}
							);
						} else {
							// If Mailchimp subscription fails, return an error
							return new Response(
								JSON.stringify({ error: mailchimpResult.error || 'Abonelik işlemi sırasında bir hata oluştu.' }),
								{
									status: 500,
									headers: {
										'Content-Type': 'application/json',
									},
								}
							);
						}
					} catch (subscriptionError) {
						console.error('Error in subscription process:', subscriptionError);
						
						// Error message for subscription failures
						const errorMessage = 'Abonelik işlemi sırasında bir hata oluştu.';
						
						return new Response(
							JSON.stringify({ error: errorMessage }),
							{
								status: 500,
								headers: {
									'Content-Type': 'application/json',
								},
							}
						);
					}
				} else {
					return new Response(
						JSON.stringify({ error: 'Geçersiz istek formatı.' }),
						{
							status: 400,
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
				}
			} catch (error) {
				return new Response(
					JSON.stringify({ error: 'İstek işlenirken bir hata oluştu.' }),
					{
						status: 400,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
			}
		}
		
		// Serve the HTML page for all other requests
		return new Response(htmlTemplate, {
			headers: {
				'Content-Type': 'text/html',
			},
		});
	},
} satisfies ExportedHandler<Env>;
