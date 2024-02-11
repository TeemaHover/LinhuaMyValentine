"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Үгүй",
      "Чи итгэлтэй байна уу?",
      "Үнэхээр гэж үү?",
      "Дахиад бодоод үз!",
      "Сүүлийн боломж!",
      "Үнэхээр үгүй гэж үү?",
      "Чи харамсаж магадгүй!",
      "Алив ээ чи минь мэдэж байгаа!",
      "Сайхан шөнөө бодоод үз!",
      "Дахиж үнсэхгүй шүү!",
      "Салж байгаа юмуу хонгоор минь ээ!",
      "Битгий цэвдэг байлдаа!",
      "Хайр чинь өөрчлөгдсөн гэж үү?",
      "Тийм гэж хэлэхийг хүсэж байгааг чинь мэдэж байна?",
      "Сүүлийн хариулт чинь уу?",
      "Бараг салчиж ээ ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-16 ">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/Knr7GDs-bJEAAAAC/muach.gif"
            alt="Bear kissing"
          />
          <div className="text-4xl font-bold my-4">Тийм ээ бэээч </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] max-w-full"
            src="https://i.pinimg.com/originals/8c/8a/1d/8c8a1d6fdafde71024be635fb1a0876e.gif"
            alt="Cute love bear"
          />
          <h1 className="text-4xl my-4 text-center">
            Чи миний Валентин болох уу?
          </h1>
          <div className="flex flex-col sm:flex-row">
            <button
              className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Тийм
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Үгүй" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
