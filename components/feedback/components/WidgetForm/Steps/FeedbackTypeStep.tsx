import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import Image from 'next/image';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl text-zinc-700 leading-6">Leave Your Feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <Image width={100} height={100} src={value.image.source} alt={value.image.alt} >
              </Image>
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
