class Panneau {
    constructor(balleidentifiant, logo, prise, balle, retrait, ballesprise1, ballesprise2, ballesprise3) {
        this.logo = ["alert alert-info fas fa-check-double", "alert alert-success ", "alert alert-danger", "alert alert-warning"];
        this.balleidentifiant = [".bal1", ".bal2", ".bal3"];
        this.prises = prise;
        this.balles = balle;
        this.retraits = retrait;
        this.ballese1 = ballesprise1;
        this.ballese2 = ballesprise2
        this.ballese3 = ballesprise3;



    }

    controleballe(balle1, balle2, balle3) {
        switch (balle1) {
            case 0:
                balle1 = "red";
                break;
            case 1:
                balle1 = "grey";
        }
        switch (balle2) {
            case 0:
                balle2 = "red";
                break;
            case 1:
                balle2 = "grey";

        }

        switch (balle3) {
            case 0:
                balle3 = "red";
                break;
            case 1:
                balle3 = "grey";

        }
        this.ballese1 = balle1;
        this.ballese2 = balle2;
        this.ballese3 = balle3;

        return [this.ballese1, this.ballese2, this.ballese3];

    }
    ajouterscore() {

        $(this.balleidentifiant[0]).css("background-color", a[0]);
        $(this.balleidentifiant[1]).css("background-color", a[1]);
        $(this.balleidentifiant[2]).css("background-color", a[2]);

    }
    effacer() {
        $(".bal1").css("background-color", 'grey');
        $(".bal2").css("background-color", 'grey');
        $(".bal3").css("background-color", 'grey');
    }
    prisetrois() {
        if (this.ballese1 === "red" && this.ballese2 === "red" && this.ballese3 === "red") {


        }
    }
    manche() {
        var countse = 0;
        setInterval(() => {
            countse++;
            $(".countse").html(countse).css({ "font-size": "500%", "color": "white" });
            if (countse === 9) {
                countse = 0;
                setTimeout(this.effacer, 1000);
            }

        }, 1000);
    }

}
class Message extends Panneau {
    constructor(message, type, vignette1) {
        super(prise, balle, retrait);
        this.type = type;
        this.texte = message;
        this.vignettes1 = vignette1;



    }
    controlevi(vignette) {
        switch (vignette) {
            case "info":
                vignette = '<div class="' + this.logo[0] + '"><strong>Info!</strong> Indicates a neutral informative change or action.</div>';


                break;
            case "success":
                vignette = '<div class="' + this.logo[1] + '"><strong>Success!</strong> Indicates a successful or positive action.</div>';

                break;
            case "danger":
                vignette = '<div class="' + this.logo[2] + '"><strong>Danger!</strong> Indicates a successful or positive action.</div>';

                break;
            case "warning":
                vignette = '<div class="' + this.logo[3] + '"><strong>Warning!</strong> Indicates a successful or positive action.</div>';


        }

        this.vignettes1 = vignette;


        return [this.vignette1];

    }
    messages() {
        $("#messages").append(this.vignettes1);
    }
}



panneau = new Panneau("ijoi");
mymessages = new Message("cd");

var a = panneau.controleballe(0, 0, 1);
var b = mymessages.controlevi("info");
panneau.ajouterscore();
panneau.prisetrois();
panneau.manche();
mymessages.messages();





