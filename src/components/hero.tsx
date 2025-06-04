import { Button } from './ui/button';
import { Input } from './ui/input';

const Hero = () => {
  return (
    <div className="p-4 bg-secondary/80 flex flex-col justify-center gap-4 items-center w-96 rounded-lg">
      <h1 className="text-center dark:text-white sm:text-3xl text-5xl font-bold">
        Become A Better React Developper
      </h1>
      <Input className=" dark:bg-white dark:text-black" type="email" required placeholder="Email" />
      <Button className="bg-white w-full hover:text-white hover:bg-primary/70 text-black dark:hover:text-black">
        Subscribe to our Newsletter
      </Button>
    </div>
  );
};

export default Hero;
