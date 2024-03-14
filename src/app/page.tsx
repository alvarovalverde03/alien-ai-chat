import Input from '@/components/Input';
import ResponseList from '@/components/ResponseList';

export default function Home() {
  return (
    <main className='flex min-h-screen max-h-screen max-w-[900px] w-full mx-auto overflow-hidden flex-col items-center justify-between px-4 pb-6 pt-12 relative'>
      <div className='absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-0 before:rounded-full before:bg-gradient-radial before:from-green-500 before:to-orange-500 before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-0 after:bg-gradient-conic after:from-green-500 after:via-orange-500 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-600 after:dark:via-[#ffa332] after:dark:opacity-40 before:lg:h-[360px] z-[-1]' />
      <div className='z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex'>
        <h1 className='mb-3 text-2xl font-semibold text-center'>
          🦜⛓️ NextJS + LangChain Chat
        </h1>
      </div>

      <ResponseList />

      <Input />
    </main>
  )
}
