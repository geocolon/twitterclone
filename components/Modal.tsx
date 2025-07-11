import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ 
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
  }) => {
    // Ensure the modal is only rendered when it is open
    const handleClose = useCallback(() => {
      if (disabled) return;
      onClose();
    }, [disabled, onClose]);
    // Handle the submit action, if provided
    const handleSubmit = useCallback(() => {
      if (disabled || !onSubmit) return;
      onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) {
      return null; // Don't render anything if the modal is not open
    }


  return (
    <div className="
      justify-center
      items-center
      flex
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-neutral-800
      bg-opacity-70
      ">
      <div className="
        relative
        w-full
        lg:w-3/6
        my-6
        mx-auto
        lg:max-w-3xl
        h-full
        lg:h-auto
        ">
            {/* Content goes here */}
            <div
              className="
                h-full
                lg:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-black
                outline-none
                focus:outline-none
              ">
                {/* Header with title and close button */}
                <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                    <h3 className="text-3xl font-semibold text-white">
                        {title}
                    </h3>
                    <button
                      className="
                        p-1
                        ml-auto
                        border-0
                        text-white
                        hover:bg-neutral-70
                        transition
                      "
                      onClick={handleClose}
                    >
                       <AiOutlineClose size={20} />
                    </button>
                </div>
                {/* Body and footer sections */}
                <div className="relative p-10 flex-auto">
                    {body}
                </div>
                {/* Footer with action button */}
                <div className="flex flex-col gap-2 p-10">
                    {footer}
                    <Button 
                        disabled={disabled} 
                        label={actionLabel} 
                        secondary 
                        fullWidth 
                        large 
                        onClick={handleSubmit} 
                    />
                </div>
          </div>
        </div>
      </div>
  );
}
export default Modal;
// This is a simple modal component that can be used in a Next.js application.