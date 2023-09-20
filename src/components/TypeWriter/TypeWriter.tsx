import React from 'react'

const TypeWriter = () => {
  const [currentText, setCurrentText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [charIndex, setCharIndex] = React.useState(0);
  const [paragraph, setParagraph] = React.useState<string[]>([])

  const messages = [
    "Hello, I'm a Frontend Developer",
    "I'm a Frontend Developer",
    "I'm a Frontend Developer",
  ]

  React.useEffect(() => {
    const message = messages[currentIndex];

    const typingInterval = setInterval(() => {
      if (!messages[currentIndex]) return clearInterval(typingInterval)
      if (charIndex < message.length) {
        setCurrentText((prevMessage) => prevMessage + message.charAt(charIndex));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === messages.length - 1 ? prevIndex + 1 : prevIndex + 1
          );
          setCurrentText("");
          setCharIndex(0);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex, charIndex]);

  React.useEffect(() => {
    setParagraph((prev) => {
      console.log(prev.length, currentIndex)
      if (prev.length + 1 === currentIndex) {
        console.log(currentText)
        return [...prev, currentText]
      }
      return [currentText]
    })
  }, [currentText, currentIndex])

  return (
    <div>
      {paragraph.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  )
}

export default TypeWriter
