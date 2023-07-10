import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


function MainContent() {
  return (
    <div className='maincontent--container'>
      <div className='maincontent--topics'>
        <h2>Sabri Alperen KAYA</h2>
        <p>Front End Developer</p>
      </div>
      <div className='maincontent--buttons'>
        <button className='email'>E-mail</button>
        <button className='linkedin'>LinkedIn</button>
      </div>
      <div className='maincontent--infos'>
        <h3>About</h3>
        <p>
        Merhaba, benim adım [İsim]. İnsanlara ilham vermek ve bilgi paylaşmak için buradayım.
        Eğitimime büyük bir önem veriyorum ve sürekli kendimi geliştirmek için çaba gösteriyorum.
        </p>
        <h3>Interests</h3>
        <p>Müzik benim için bir tutkudur. Her türlü tınıyı keşfetmek ve çalmak beni mutlu eder.
        Fotoğrafçılık ilgimi çeken bir hobi. Anları yakalamak ve güzellikleri paylaşmak büyüleyici.
        Yabancı diller öğrenmeye olan ilgim hiç bitmiyor.
        </p>
      </div>
    </div>
  )
}
library.add(fas)
export default MainContent;