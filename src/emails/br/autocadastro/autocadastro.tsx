import {
  Body,
  Column,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

import { DataSection } from '~/components/emails/autocadastro/data-section';

import type { AutoCadastroProps } from './schema';

export function Autocadastro(props: AutoCadastroProps) {
  const styles: Record<string, React.CSSProperties> = {
    containerLogo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      backgroundColor: '#E1E1E1',
      borderRadius: '4px 4px 0 0',
      padding: '1.5rem',
    },
    divider: {
      marginTop: '2rem',
      borderColor: '#eb6619',
    },
    sectionName: {
      margin: '30px 1.5rem 40px 1.5rem',
    },
    name: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      margin: '16px 0',
      fontWeight: '500',
    },
  };

  return (
    <Html lang="pt-BR">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>
        Agora você faz parte da Consultoria de Beleza Natura e Avon, a maior
        Consultoria de Beleza do Brasil*.
      </Preview>
      <Body>
        <Section>
          <Row>
            <Column style={styles.containerLogo}>
              <Img
                src="https://aibv-public-assets.prd.naturacloud.com/marketing/elo/Consultoria De Beleza_pt_br@2x.png"
                alt="Logo da Natura e Avon com texto: Consultoria de Beleza"
                width="180"
              />
              <Hr style={styles.divider} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Img
                alt="Pessoas felizes com texto escrito: Seu cadastro já foi aprovado! Que bom ter você com aqui!"
                src="https://aibv-public-assets.prd.naturacloud.com/marketing/elo/brasil/CB_imagem_e-mail-BV_v2@2x.png"
                style={{ maxWidth: '100%' }}
              />
            </Column>
          </Row>
        </Section>
        <Section style={styles.sectionName}>
          <Text style={styles.name}>Olá, {props.name},</Text>
          <Text>
            Agora você faz parte da Consultoria de Beleza Natura e Avon, a maior
            Consultoria de Beleza do Brasil*.
          </Text>
          <Text>Estamos muito felizes com a sua chegada!</Text>
        </Section>
        <DataSection
          title="Seus dados de Consultoria"
          texts={[
            `O seu Código de Consultora é: ${props.code}`,
            `Sua modalidade de pagamento é: ${props.creditLine}`,
            `Seu crédito inicial é: ${props.score}`,
          ]}
        />
        <Text>Estamos muito felizes com a sua chegada!</Text>
        {props.showLeader && (
          <DataSection
            title="Gerente de Negócios"
            texts={[
              `É a pessoa que poderá ajudar você até a chegada da sua Líder de Negócio. A Líder de Negócios será a pessoa responsável pelo grupo que você faz parte, apoiando na sua trajetória na Consultoria Natura e Avon.`,
              `Fale com: ${props.leader}`,
              `Celular: ${props.leaderPhone}`,
            ]}
          />
        )}
      </Body>
    </Html>
  );
}
