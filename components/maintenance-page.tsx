'use client'

import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Trang Web Đang Bảo Trì
          </h1>

          <div className="mb-6">
            <Image
              src="/images/updates.png"
              alt="Hình minh họa bảo trì"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="text-gray-600 text-center mb-8">
            Chúng tôi xin lỗi vì sự bất tiện này. Trang web của chúng tôi hiện đang trong quá trình bảo trì định kỳ để cải thiện trải nghiệm của bạn. Chúng tôi sẽ sớm hoạt động trở lại.
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Đối Với Các Vấn Đề Khẩn Cấp
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="text-gray-600" size={20} />
              <a href="tel:+84906753957" className="text-gray-600">0906753957</a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="text-gray-600" size={20} />
              <a href="mailto:tuanchudinh@vinazen.com.vn" className="text-blue-600 hover:underline">
                tuanchudinh@vinazen.com.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}