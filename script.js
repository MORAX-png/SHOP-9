// ==========================================
// SHOP#9 WHATSAPP SETTINGS
// ==========================================

const whatsappNumber = "923212156035";


// ==========================================
// ORDER ON WHATSAPP
// ==========================================

function orderWhatsApp(productName, price) {

    const message =
        "Hello SHOP#9! 👋\n\n" +
        "I want to order:\n\n" +
        "Product: " + productName + "\n" +
        "Price: Rs. " + price + "\n\n" +
        "Please confirm my order.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}