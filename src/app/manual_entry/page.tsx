import { FileText } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6">
            <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                    <FileText className="text-purple-500" size={32} />
                    <h1 className="text-3xl font-bold text-gray-800">Manuel Giriş</h1>
                </div>
                <div className="text-gray-600 text-lg space-y-4">
                    <p>
                        Tarama mümkün olmadığında veya teknik bir sorun yaşandığında bu seçeneği kullanabilirsiniz.
                    </p>
                    <p>
                        Misafire ait bilgileri manuel olarak doldurmanız gerekmektedir. Bu bilgiler şunları içerebilir:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Tam adı</li>
                        <li>Cinsiyeti</li>
                        <li>Doğum tarihi</li>
                        <li>Telefon numarası</li>
                        <li>Belge numarası</li>
                        <li>Düzenleyen ülke</li>
                        <li>Giriş tarihi (Check-in)</li>
                        <li>Çıkış tarihi (Check-out)</li>
                    </ul>
                    <p>
                        Bu yöntem, girilen veriler üzerinde tam kontrol sağlar ancak tarama yöntemine göre daha fazla zaman alabilir.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
