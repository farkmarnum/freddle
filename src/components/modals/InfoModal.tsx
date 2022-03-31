import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="O" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter F is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="present"
        />
        <Cell value="O" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="C" />
        <Cell isRevealing={true} isCompleted={true} value="K" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        It's like Wordle, but it's just about my cat Fred.
      </p>
    </BaseModal>
  )
}
