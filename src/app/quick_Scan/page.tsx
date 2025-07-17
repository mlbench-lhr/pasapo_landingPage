import React from 'react'
import { Camera } from "lucide-react";
function page() {
    return (
        <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6">
            <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                    <Camera className="text-blue-500" size={32} />
                    <h1 className="text-3xl font-bold text-gray-800">Kamerayla Hızlı Tarama</h1>
                </div>
                <div className="text-gray-600 text-lg space-y-4">
                    <p>
                       Bu seçenekle, cihazınızın kamerasını kullanarak bir misafirin pasaportunu veya kimliğini anında tarayabilirsiniz.
                       Sistem, aşağıdakiler gibi önemli kimlik bilgilerini çıkarmak için gelişmiş makine öğrenimi kullanır:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Ad Soyad</li>
                        <li>Doğum tarihi</li>
                        <li>Cinsiyet</li>
                        <li>Düzenleyen Ülke</li>
                        <li>Belge numarası</li>
                        <li>Belge Türü</li>
                    </ul>
                    <p>
                        Çıkarılan tüm veriler saniyeler içinde otomatik olarak davetli listesine eklenir.
                    </p>
                    <p>
                       Bu, resepsiyon veya ön büroda misafir eklemenin en hızlı ve en etkili yöntemidir.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
