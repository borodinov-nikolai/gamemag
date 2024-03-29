import React from 'react'
import styles from './questions.module.scss'
import { Metadata } from 'next';
import { getMetaData } from '@/api/cmsAPI';




export async function generateMetadata(): Promise<Metadata> {
  const data = await getMetaData('faq')
  return {
    title: data?.attributes?.meta?.title,
    description: data?.attributes?.meta?.description
    }
}



const Questions = () => {
  return (
    <div className={styles.root}>
    <h1 className={styles.title}> Частые вопросы </h1>
    
    <ul>
      <li>
        <h3>Что такое офлайн активация?</h3>
        <p>
         После успешной активации Вы получаете отдельный игровой клиент с аккаунтом продавца в offline-режиме с выбранной игрой.
 Активация даст вам возможность играть неограниченное кол-во времени в купленную игру.
 Вы без проблем можете пользоваться своим ЛИЧНЫМ аккаунтом (играя в свои игры, со своего аккаунта), не теряя активацию

<br/>
 Плюсы:
- Можно не ждать взлома игры \ последнего патча \ новых DLC
- Стоимость активации в несколько раз меньше чем ценник в Steam (или другом сервисе \ торговой площадке), хотя в итоге у вас будет рабочая, актуальная (на момент покупки) лицензионная версия игры.
- Игра по времени не ограничена
- Не мешает вашему основному аккаунту, вы без проблем можете играть в свои игры
<br/>
 Минусы:
Активация слетает:
- при смене \ обновлении Windows, смена железа (нельзя ничего добавлять \ вытаскивать), однако обновлять драйвера на видеокарту МОЖНО и нужно!
- восстановление \ смена \ обновление Windows
- резкое отключение электроэнергии \ любой BSOD
- попытка самостоятельно обновить игру
        </p>
      </li>
      <li>
        <h3>Почему стоит покупать у нас?</h3>
        <p>
        Мы являемся партнерами популярной платформы digiseller.ru и предлагаем только официальные продукты. Наши аккаунты и ключи гарантированно действительны, что обеспечивает Вам безопасность и уверенность в приобретении лицензионных товаров.
        </p>
      </li>
      <li>
        <h3>Как происходит доставка продуктов?</h3>
        
        <p>Доставка осуществляется моментально после подтверждения оплаты. Вы получите все необходимые данные, включая аккаунты или ключи, на указанный Вами электронный адрес.</p>
      </li>
      <li>
        <h3>Что делать в случае проблем с продуктом?</h3>
        <p>
        Прежде всего - без паники! Во всех товарах есть максимально подробная инструкция, следуя всем указаниям у Вас получится активировать игру.
Для начала попробуйе перечитать ее и попробуйте ещё раз.
Если ничего не получается - обратитесь к Продавцу, Вам обязательно помогут в ближайшее время!
        </p>
      </li>
      <li>
        <h3>
        Безопасность и конфиденциальность
        </h3>
        <p>
        Мы ценим вашу конфиденциальность и обеспечиваем безопасность Ваших данных. Все транзакции проходят через защищенные каналы, гарантируя сохранность Ваших личных и финансовых данных.
        </p>
      </li>
      <li>
        <h3>
        Не нашли ответа на свой вопрос?
        </h3>
        <p>
        Свяжитесь с нашей службой поддержки для получения более подробной информации.
        </p>
      </li>
      
    </ul>

  </div>
  )
}

export default Questions