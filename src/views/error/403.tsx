import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function Error403() {
  const navigate = useNavigate()
  const goToIndex = () => {
    navigate('/index')
  }
  return (
    <div
      className="error-page h100vh w100vw flex-center flex-col"
      style={{ backgroundImage: 'linear-gradient(192deg, #404c66, #7c5772, #b3607d, #ea6689)' }}
    >
      <div className="animate-bounce text-30">403</div>
      <Button
        onClick={() => {
          goToIndex()
        }}
      >
        去首页
      </Button>
    </div>
  )
}
