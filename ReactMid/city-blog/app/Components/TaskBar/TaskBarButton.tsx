interface TaskBarButtonProps {
    img_src: string;
}
function TaskBarButton ({img_src}: TaskBarButtonProps) {
    return (
        <button>
            <img src={img_src} alt="" />
        </button>
    )
};

export default TaskBarButton