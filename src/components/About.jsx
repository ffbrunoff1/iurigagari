import { motion } from 'framer-motion'
import { Star, Award, Telescope, Rocket, Globe, Users } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Rocket,
      title: "Astronauta Certificado",
      description: "Formação completa pela NASA com especialização em observação espacial"
    },
    {
      icon: Telescope,
      title: "Especialista em Telescópios",
      description: "15 anos desenvolvendo e operando telescópios de alta performance"
    },
    {
      icon: Star,
      title: "Descobertas Espaciais",
      description: "Responsável por identificar mais de 200 objetos celestes"
    },
    {
      icon: Award,
      title: "Reconhecimento Internacional",
      description: "Premiado por contribuições significativas à astronomia moderna"
    }
  ]

  const stats = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "500+", label: "Observações Realizadas" },
    { number: "50+", label: "Missões Espaciais" },
    { number: "200+", label: "Descobertas Catalogadas" }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-800 mb-6">
            Sobre Iuri Gagari
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Uma jornada dedicada à exploração do cosmos e ao desenvolvimento 
            de tecnologias avançadas para observação espacial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-32 h-32 border-2 border-primary-200 rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-24 h-24 border-2 border-secondary-200 rounded-full"
              ></motion.div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 relative z-10">
                <Globe className="w-20 h-20 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  Missão e Visão
                </h3>
                <p className="text-primary-700 text-lg leading-relaxed">
                  Minha missão é democratizar o acesso ao conhecimento espacial através 
                  de tecnologias de telescópio avançadas. Acredito que cada pessoa deve 
                  ter a oportunidade de explorar e compreender os mistérios do universo.
                </p>
                <p className="text-primary-700 text-lg leading-relaxed mt-4">
                  Com mais de uma década de experiência como astronauta, dedico-me a 
                  desenvolver soluções inovadoras que tornam a observação espacial 
                  mais precisa, acessível e inspiradora.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary-800 mb-8">
              Principais Conquistas
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-full">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-primary-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-cosmic rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Números que Impressionam
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12">
            <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-primary-800 mb-6">
              Compartilhando Conhecimento
            </h3>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
              Além das missões espaciais, dedico-me a educar e inspirar a próxima 
              geração de exploradores espaciais. Através de workshops, palestras e 
              consultoria especializada, compartilho conhecimentos que podem 
              revolucionar sua compreensão do universo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}