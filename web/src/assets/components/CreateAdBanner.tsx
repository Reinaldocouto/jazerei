import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner () {
    return (
        <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">Zerou mais um?</strong>
              <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>

          <Dialog.Trigger className="py-3 px-4 bg-cyan-300 hover:bg-cyan-500 text-gray-800 rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            <strong>Publicar anúncio</strong>
          </Dialog.Trigger>

          <Dialog.Trigger className="py-3 px-4 bg-cyan-300 hover:bg-cyan-500 text-gray-800 rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            <strong>Publicar Comentário</strong>
          </Dialog.Trigger>

          </div>
        </div>
    )
}