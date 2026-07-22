<?php

$oyunlar = [
    [
        "ad" => "Minecraft",
        "resim" => "minecraft.jpg",
        "aciklama" => "Açık dünyada hayatta kalma ve inşa oyunu.",
        "yazar" => "Mojang",
        "ceviri" => "Türkçe"
    ],

    [
        "ad" => "GTA V",
        "resim" => "gta5.jpg",
        "aciklama" => "Los Santos'ta geçen açık dünya aksiyon oyunu.",
        "yazar" => "Rockstar Games",
        "ceviri" => "Türkçe"
    ],

    [
        "ad" => "The Witcher 3",
        "resim" => "witcher3.jpg",
        "aciklama" => "Fantastik RPG macera oyunu.",
        "yazar" => "CD Projekt",
        "ceviri" => "Türkçe"
    ],

    [
        "ad" => "Cyberpunk 2077",
        "resim" => "cyberpunk.jpg",
        "aciklama" => "Gelecekte geçen açık dünya RPG oyunu.",
        "yazar" => "CD Projekt",
        "ceviri" => "Türkçe"
    ],

    [
        "ad" => "Red Dead Redemption 2",
        "resim" => "rdr2.jpg",
        "aciklama" => "Vahşi batı temalı aksiyon macera oyunu.",
        "yazar" => "Rockstar Games",
        "ceviri" => "Türkçe"
    ]
];

shuffle($oyunlar); // oyunları karıştır

$seciliOyun = $oyunlar[0]; // ilk oyunu al

?>

<!DOCTYPE html>
<html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

    <div class="container mt-5">
        <div class="row justify-content-center">

            <div class="col-md-4">

                <div class="card">

                    <img src="resimler/<?php echo $seciliOyun["resim"]; ?>" class="card-img-top">

                    <div class="card-body">

                        <h5 class="card-title">
                            <?php echo $seciliOyun["ad"]; ?>
                        </h5>

                        <p class="card-text">
                            <?php echo $seciliOyun["aciklama"]; ?>
                        </p>

                        <p>
                            <strong>Yazar:</strong>
                            <?php echo $seciliOyun["yazar"]; ?>
                        </p>

                        <p>
                            <strong>Çeviri:</strong>
                            <?php echo $seciliOyun["ceviri"]; ?>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </div>

</body>

</html>