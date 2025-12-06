public class CarpimTablosu {
    public static void main(String[] args) {
        
        // Dış döngü: 1'den 10'a kadar (Sol taraftaki çarpan)
        // Görselde 1, 2, 3... diye giden kısım.
        for (int i = 1; i <= 10; i++) {

            // İç döngü: 1'den 10'a kadar (Sağ taraftaki çarpan)
            for (int j = 1; j <= 10; j++) {
                int sonuc = i * j;
                // Ekrana yazdırma formatı: 1*1=1
                System.out.println(i + "*" + j + "=" + sonuc);
            }

            // Her 10'lu grup bittiğinde araya çizgi çeker
            System.out.println("----------------");
        }
    }
}