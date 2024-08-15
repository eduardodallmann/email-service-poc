import { Section, Text } from '@react-email/components';

export function DataSection(props: { title: string; texts: Array<string> }) {
  const styles: Record<string, React.CSSProperties> = {
    section: {
      maxWidth: '514px',
    },
    border: {
      backgroundColor: '#eb6619',
      height: '3px',
    },
    wrapper: {
      borderRadius: '0 0 4px 4px',
      backgroundColor: '#EEEEEE',
      padding: '1.5rem',
    },
    title: {
      color: 'rgba(215, 63, 60, 1)',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      margin: '0px',
      fontWeight: '500',
    },
  };

  return (
    <Section style={styles.section}>
      <div style={styles.border} />
      <div style={styles.wrapper}>
        <Text style={styles.title}>{props.title}</Text>
        {props.texts.map((text) => (
          <Text key={text}>{text}</Text>
        ))}
      </div>
    </Section>
  );
}
