import { useLayout } from "common"
import Image from "next/image"
import { useRouter } from "next/router"
import frog_wcty from "@assets/images/frog_wcty.png"
import partners from "@assets/images/partners/partners.png"
import { Block, Footer, Wrapper } from "./styles"
import { ReactComponent as FB } from "@assets/icons/facebook.svg"
import { ReactComponent as IG } from "@assets/icons/instagram.svg"
import { Container } from 'containers/Initiative/styles'


export default function About() { 
  const router = useRouter()
  const layout = useLayout()

  return <> 
    <Container>
      <Wrapper>
      <Block>
        <div><Image src={frog_wcty} /></div>
        <div>
          <h3>Вітаємо!</h3>
          <p>
            Wecity — це онлайн платформа, яка має за мету змінити ваше місто на краще. Вона для тих, хто хотів би бачити позитивні зміни навколо себе, але не має часу, сил чи знань на те, щоби втілювати їх власноруч. Це платформа для громадського мережування навколо спільних міських проблем, визначення шляхів для їх вирішення, пошуку виконавців та колективного збору ресурсів. 
            <br/><br/>
            Наша мета довести всім, що змінювати навколишній світ — це легко, якщо робити це разом.
          </p>
        </div>
      </Block>
      <Block>
        <div>
          <h4>
            Проєкт реалізується за підтримки доброчинців та партнерів
          </h4>
          <Image src={partners} />
        </div>
        <Footer>
          <div>
            <p>Читай про останні новини платформи в соціальних мережах</p>
            <div>
              <a href="https://www.facebook.com/we.city.platform"><FB/></a>
              <a href="https://www.instagram.com/we.city.platform"><IG/></a>
            </div>
          </div>
          <div>
            <p>Привітайся з нами — пиши на пошту hi@weee.city</p>
            <div/>
            <a href="privacy_policy.pdf">Політика конфіденційності</a>
          </div>
        </Footer>
      </Block>
      </Wrapper>
    </Container>
  </>
}
