let travado = false;

$(document).ready(function () {

    $(".hover-area").hover(
        function () {
            if (!travado) {
                $(".overlay").addClass("active");
            }
        },
        function () {
            if (!travado) {
                $(".overlay").removeClass("active");
            }
        }
    );

    $(".hover-area").click(function () {
        travado = !travado;

        if (travado) {
            $(".overlay").addClass("active");

            $("#RAVEN")
                .removeClass("animate__pulse animate__infinite")
                .addClass("animate__animated animate__pulse animate__infinite");

        } else {
            $(".overlay").removeClass("active");

            $("#RAVEN").removeClass("animate__pulse animate__infinite");
        }
    });

    function animarElemento(id) {
        $(id)
            .removeClass("animate__animated animate__pulse animate__infinite")
            .addClass("animate__animated animate__pulse animate__infinite");
    }

    $(document).ready(function () {

        $("#RAVEN").click(function () {

            $("body > *").fadeOut(500);


            $("#dentro").fadeIn(600);
            setTimeout(() => {
                $("#quadro").fadeIn(600).css("transform", "rotate(-10deg)");
                animarElemento("#quadro");

            }, 300);

            setTimeout(() => {
                $("#poltrona").fadeIn(600);
                animarElemento("#poltrona");
            }, 600);

            setTimeout(() => {
                $("#corvo").show();

                setTimeout(() => {
                    $("#corvo").addClass("ativo");
                    animarElemento("#corvo");
                }, 50);

            }, 600);

        });

    });


    $("#quadro").click(function () {
        Swal.fire({
            title: "A mulher",
            text: "Lenora é a mulher amada que morreu e não aparece fisicamente no poema. Sua ausência é o centro do sofrimento do narrador, que não consegue aceitar a perda e mantém uma visão idealizada dela.",
            imageUrl: "icon_mulher.png",
            imageWidth: 100,
            imageHeight: 100,

            customClass: {
                title: "MeuTitulo",
                htmlContainer: "infos"
            }
        });
    });


    $("#poltrona").click(function () {
        Swal.fire({
            title: "O homem",
            text: "O narrador está exausto e emocionalmente abalado. A poltrona representa o momento em que ele tenta refletir e entender a situação, mas acaba intensificando seu estado de confusão e sofrimento.",
            imageUrl: "icon_homem.png",
            imageWidth: 100,
            imageHeight: 100,


            customClass: ({
                title: "MeuTitulo",
                htmlContainer: "infos"
            })
        })

        $("#corvo").click(function () {
            Swal.fire({
                title: "O corvo",
                text: "O corvo surge como um elemento inesperado e se posiciona sobre o busto de Palas, símbolo da razão. Sua repetição de “Nunca mais” leva o narrador a interpretar a ave como um sinal de impossibilidade e permanência da dor, funcionando como gatilho para seu conflito psicológico.",
                imageUrl: "icon_corvo.png",
                imageWidth: 100,
                imageHeight: 100,

                customClass: ({
                    title: "MeuTitulo",
                    htmlContainer: "infos"
                })

            });
        })
    })
})

