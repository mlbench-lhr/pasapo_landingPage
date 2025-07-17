import React from 'react'
import { Link as LinkIcon } from "lucide-react";
function page() {
    return (
        <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6">
            <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                    <LinkIcon className="text-pink-500" size={32} />
                    <h1 className="text-3xl font-bold text-gray-800">Misafirin Kendi Başına Taramasına İzin Verin</h1>
                </div>
                <div className="text-gray-600 text-lg space-y-4">
                    <p>
                        Bu yöntemde, misafire app yoluyla gönderilebilecek güvenli bir bağlantı oluşturulur.
                        Misafir bu bağlantıya tıkladığında, cep telefonu kamerasını kullanarak pasaportunu veya kimliğini taraması istenir.
                    </p>
                    <p>
                        Tarama sonrası elde edilen veriler güvenli bir şekilde sisteme iletilir ve herhangi bir manuel giriş yapılmasına gerek kalmadan otomatik olarak eklenir.
                    </p>
                    <p>
                        Bu yöntem, özellikle uzaktan check-in işlemleri veya misafirin kendi kaydını yaptığı self-servis seçenekleri için idealdir.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
