'use client';

import { useState, useEffect, useRef } from 'react';

export default function ZatsubanaComponent() {
  const [theme, setTheme] = useState('ここにテーマが表示されるよ');
  const interval = useRef<any>(null);

  const startRandomTheme = () => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      const texts = [
        '好きなプログラミング言語は？',
        '最近気になる技術は？',
        '好きなプログラミング言語は？',
        '最近気になる技術は？',
        '今までで一番記憶に残っている開発や開発における出来事は？',
        '自分のここはすごいと思うところ',
        'ChatGPTとどう付き合っている？',
        '最近心ときめいたサービス・アプリ・ガジェット etc は？',
        '実は人見知り？',
        '今欲しいモノは？',
        '最近買った高いモノは？',
        'おすすめの本（技術書）を3つ教えて',
        '開発でよく利用するおすすめのアプリやサービス、chrome 拡張は？',
        'エンジニアになっていなかったら何をやっている？',
        'Respect している人物は？',
        'タイムマシーンを1回（1往復だけ）使えるとしたら、過去と未来どっちに行く？',
        '死ぬまでにやってみたいことは？',
        '最近のマイブームは？',
      ];
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setTheme(randomText);
    }, 10);
  };

  const stopRandomTheme = () => {
    clearInterval(interval.current);
  };

  // コンポーネントがアンマウントされるときにインターバルをクリア
  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="container2">
      <div className="title">
        Let's 雑談 about Engineering!
      </div>
      <div className="container">
        <div id="textDisplay">{theme}</div>
      </div>
      <div className="container3">
      <button id="startBtn" onClick={startRandomTheme}>Start</button>
      <button id="stopBtn" onClick={stopRandomTheme}>Stop</button>
      </div>
      <div className="container4">
        <a href="https://twitter.com/share?url=https://hibriiiiidge-zatsudan.vercel.app/&text=エンジニア同士での雑談ネタを提供します〜" target="_blank">
          <img src="/tw.png" alt="Twitter Share Icon" width="50" />
        </a>
      </div>
    </div>
  );
}
