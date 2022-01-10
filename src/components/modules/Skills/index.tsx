import Image from 'next/image';
import Link from 'next/link';
import skillsIllustration from '../../../assets/skills.svg';
import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import { useTheme } from '../../../providers/ThemeProvider';
import { Details, SkillsWrapper, Thumbnail, Wrapper } from './styles';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <Image
            src={skillsIllustration}
            alt="I’m Roland and I’m a Backend & Devops engineer!"
          />
        </Thumbnail>
        <Details theme={theme}>
          <h1 data-cy="about">More about me</h1>
          <p>
            This is completely a work in progress page - which I am currently
            working on.
          </p>
          <Link href="#contact" passHref>
            <Button as="a">Hire me</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
