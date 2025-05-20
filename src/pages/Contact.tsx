import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, Phone, Mail, MapPin, Clock, Users, Globe } from 'lucide-react';

export async function onBeforeRender() {
  return {
    pageContext: {
      title: 'Contact | KHCustomWeb',
      description: 'Neem contact op met KHCustomWeb voor een professionele website. Vraag een gratis demo aan of stel je vragen. Snelle respons gegarandeerd.'
    }
  };
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  React.useEffect(() => {
    document.title = "Contact | KHCustomWeb";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31639430197?text=Hallo,%20ik%20heb%20een%20vraag%20over%20KHCustomWeb', '_blank');
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Contact opnemen voor een <span className="text-orange-500">professionele</span> website
            </h1>
            <p className="text-xl text-gray-600">
              Heb je vragen of wil je een vrijblijvende demo aanvragen? Vul het formulier in of neem direct contact op.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-md p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bedankt voor je bericht!</h3>
                  <p className="text-gray-600">
                    Ik neem zo snel mogelijk contact met je op, meestal binnen 1 werkdag.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                     Vraag je gratis demo of offerte aan
                    </h2>
                    <p className="text-gray-600">
                      Wil je zien hoe jouw perfecte website eruit kan zien? Vraag een gratis demo aan en ontvang binnen 24 uur een eerste indruk van de mogelijkheden. Geen verplichtingen, eerst zien en dan beslissen.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Naam
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Jouw naam"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="jouw@email.nl"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefoonnummer (optioneel)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="06 12345678"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Bericht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Vertel me waar ik je mee kan helpen"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center ${
                        isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verzenden...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Verstuur bericht
                          <Send className="ml-2" size={18} />
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Contactgegevens
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Telefonisch contact</h3>
                      <p className="mt-1 text-gray-600">06-39430197</p>
                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={handleWhatsAppClick}
                          className="text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded transition-colors duration-300"
                        >
                          WhatsApp
                        </button>
                        <a
                          href="tel:+31639430197"
                          className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors duration-300"
                        >
                          Bellen
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Beter bereikbaar via WhatsApp!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                      <p className="mt-1">
                        <a 
                          href="mailto:kayhuybreghs@icloud.com"
                          className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                        >
                          kayhuybreghs@icloud.com
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-gray-500">Ik reageer meestal binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Locatie</h3>
                      <p className="mt-1 text-gray-600">Venlo, Limburg</p>
                      <p className="mt-1 text-sm text-gray-500">Werkzaam in heel Nederland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Waarom kiezen voor KHCustomWeb?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <Clock size={16} />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Snelle responstijd - meestal binnen 24 uur</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <Users size={16} />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Persoonlijke aanpak en maatwerk oplossingen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <Globe size={16} />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Ervaring met diverse branches en projecten</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
              Neem contact op voor jouw perfecte website
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ben je klaar om jouw website naar het volgende niveau te tillen? Of wil je meer weten over hoe wij jou kunnen helpen met een snelle, unieke en professionele online aanwezigheid? Neem dan contact met ons op!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vul het bovenstaande formulier in of stuur een e-mail naar{' '}
                <a 
                  href="mailto:kayhuybreghs@icloud.com" 
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                >
                  kayhuybreghs@icloud.com
                </a>
                . We staan klaar om je te helpen met een op maat gemaakte oplossing die bij jouw bedrijf past. Of je nu een gratis demo wilt aanvragen of meer informatie zoekt over onze diensten, wij staan voor je klaar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;