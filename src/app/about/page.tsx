export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media community',
};

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa
        eveniet corrupti, consectetur sint cum assumenda quasi quisquam
        molestias quia id facere impedit accusamus, dolor qui consequatur quod
        iusto temporibus pariatur iste amet. Numquam, atque dolorum rem saepe,
        in officia suscipit accusamus temporibus similique consequatur veniam
        quos, nostrum quisquam unde? Nulla commodi reprehenderit labore
        distinctio et vero, eaque accusantium rerum ex facere officia, odit
        minima, aliquam alias amet aut soluta exercitationem fugit quae non
        dolore voluptatem aperiam quas? Minima, non optio natus totam cumque
        velit distinctio delectus fuga dolorum? Vero tenetur, ipsa commodi quam
        assumenda sed quidem sequi quis natus?
      </p>
    </main>
  );
};

export default About;
