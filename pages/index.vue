<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-blue-900">North Island Fly</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Captain</a>
              <a href="#fishing" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Fishing</a>
              <a href="#rates" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Rates</a>
              <a href="#gallery" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Gallery</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div class="md:hidden">
            <UButton @click="mobileMenuOpen = !mobileMenuOpen" variant="ghost" icon="i-heroicons-bars-3" />
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Captain</a>
          <a href="#fishing" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Fishing</a>
          <a href="#rates" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Rates</a>
          <a href="#gallery" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Gallery</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-16 relative overflow-hidden">
      <div class="relative h-screen flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style="background-image: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"></div>
        
        <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            North Island Fly
            <span class="block text-3xl md:text-4xl font-light text-blue-200 mt-2">
              & Light Tackle
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Fly Fishing and Light Tackle Guide Service
          </p>
          <p class="text-lg md:text-xl mb-8 text-blue-200">
            Long Island, NY with Captain Dave Flanagan
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton size="xl" color="white" variant="solid" @click="scrollTo('#contact')" class="px-8 py-4">
              Book Your Trip
            </UButton>
            <UButton size="xl" color="white" variant="outline" @click="scrollTo('#about')" class="px-8 py-4">
              Meet Captain Dave
            </UButton>
          </div>
          <div class="mt-12">
            <a href="tel:631-935-5719" class="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">
              📞 (631) 935-5719
            </a>
          </div>
        </div>
        
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <UIcon name="i-heroicons-chevron-down" class="w-8 h-8 text-white" />
        </div>
      </div>
    </section>

    <!-- About Captain Dave Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Captain Dave Flanagan</h2>
            <p class="text-lg text-gray-700 mb-6">
              Captain Dave Flanagan is one of the most versatile fishing guides on Long Island Sound, 
              specializing in both fly fishing and light tackle techniques. Operating in the western 
              portions of Long Island Sound, Dave has discovered some of the most productive and 
              less crowded fishing waters in the area.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              Whether you're a seasoned angler or just starting out, Captain Dave's patient instruction 
              and deep knowledge of local waters will ensure you have an unforgettable experience. 
              From fly fishing for striped bass to light tackle spinning, and if you're lucky, 
              he might even take you bottom fishing for blackfish in the fall!
            </p>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 class="text-2xl font-bold text-blue-600">20+</h3>
                <p class="text-gray-600">Years Experience</p>
              </div>
              <div class="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 class="text-2xl font-bold text-blue-600">100%</h3>
                <p class="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Captain Dave Flanagan" 
                   class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fishing & Fish Section -->
    <section id="fishing" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">The Fishing Experience</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Long Island Sound offers some of the finest inshore fishing on the East Coast. 
            Our waters are home to striped bass, bluefish, false albacore, and seasonal species.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Striped Bass" class="w-full h-48 object-cover" />
            </template>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Striped Bass</h3>
            <p class="text-gray-600">
              The premier gamefish of Long Island Sound. These powerful fish provide incredible 
              sport on both fly and light tackle throughout the season.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Bluefish" class="w-full h-48 object-cover" />
            </template>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Bluefish</h3>
            <p class="text-gray-600">
              Aggressive and exciting to catch, bluefish are abundant in our waters and provide 
              non-stop action, especially on light tackle.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="False Albacore" class="w-full h-48 object-cover" />
            </template>
            <h3 class="text-xl font-bold text-gray-900 mb-3">False Albacore</h3>
            <p class="text-gray-600">
              Fast and furious, these speedsters arrive in fall and provide some of the most 
              exciting fishing of the year on fly gear.
            </p>
          </UCard>
        </div>

        <div class="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">What Makes Our Trips Special</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-blue-900 mb-3">🎣 Expert Instruction</h4>
              <p class="text-gray-700">
                Whether you're new to fly fishing or looking to improve your technique, 
                Captain Dave provides personalized instruction for all skill levels.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-blue-900 mb-3">🛥️ Less Crowded Waters</h4>
              <p class="text-gray-700">
                Fish in productive areas away from the crowds. Dave knows the secret spots 
                where the fish are abundant and the pressure is light.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-blue-900 mb-3">🎯 Versatile Techniques</h4>
              <p class="text-gray-700">
                From fly fishing to light tackle spinning, and even bottom fishing for 
                blackfish in the fall - experience it all!
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-blue-900 mb-3">🌊 Local Knowledge</h4>
              <p class="text-gray-700">
                Decades of experience fishing these waters means knowing exactly when 
                and where to find the fish in all conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rates Section -->
    <section id="rates" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Rates & Information</h2>
          <p class="text-xl text-gray-600">
            Competitive rates for unforgettable fishing experiences
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
              Popular
            </div>
            <div class="text-center p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Half Day Trip</h3>
              <div class="text-4xl font-bold text-blue-600 mb-2">$600</div>
              <p class="text-gray-600 mb-6">4 Hours of Fishing</p>
              <ul class="space-y-3 text-left">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  All tackle provided
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Professional instruction
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Up to 2 anglers
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Perfect for beginners
                </li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <div class="text-center p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Full Day Trip</h3>
              <div class="text-4xl font-bold text-blue-600 mb-2">$850</div>
              <p class="text-gray-600 mb-6">8 Hours of Fishing</p>
              <ul class="space-y-3 text-left">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  All tackle provided
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Professional instruction
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Up to 2 anglers
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Best value for serious anglers
                </li>
              </ul>
            </div>
          </UCard>

          <UCard>
            <div class="text-center p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Additional Angler</h3>
              <div class="text-4xl font-bold text-blue-600 mb-2">+$100</div>
              <p class="text-gray-600 mb-6">3rd Angler Add-on</p>
              <ul class="space-y-3 text-left">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Maximum 3 total anglers
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Same great service
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Perfect for groups
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-500 mr-2" />
                  Split the cost!
                </li>
              </ul>
            </div>
          </UCard>
        </div>

        <div class="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Important Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Weather Policy</h4>
              <p class="text-gray-600 mb-4">
                Bad weather cancellations are at the sole discretion of the Captain. 
                Rain is not grounds for cancellation - overcast/rainy days often provide 
                the best fishing opportunities!
              </p>
              
              <h4 class="font-semibold text-gray-900 mb-2">Deposit Required</h4>
              <p class="text-gray-600">
                A deposit of $150.00 is required for all trips to secure your date.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">What to Bring</h4>
              <ul class="space-y-2 text-gray-600">
                <li>• Polarized sunglasses</li>
                <li>• Sunscreen</li>
                <li>• Non-marking shoes</li>
                <li>• Weather-appropriate clothing</li>
                <li>• Lunch (cold water provided)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Anglers Gallery</h2>
          <p class="text-xl text-gray-600">
            See what our guests have been catching in Long Island Sound
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Striped Bass Catch" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Beautiful Striped Bass on Fly
              </p>
            </div>
          </div>

          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Bluefish Catch" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Bluefish on Light Tackle
              </p>
            </div>
          </div>

          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="False Albacore" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Fall Run False Albacore
              </p>
            </div>
          </div>

          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Happy Angler" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Happy Angler with Trophy
              </p>
            </div>
          </div>

          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Fly Fishing Action" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Fly Fishing in Action
              </p>
            </div>
          </div>

          <div class="relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1515098200843-83edd560949a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Sunset Fishing" 
                 class="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow" />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
              <p class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Perfect Evening on the Water
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p class="text-xl text-blue-100 mb-8">
          Sign up for our bi-weekly fishing reports and stay informed about the latest catches and conditions!
        </p>
        <div class="max-w-md mx-auto">
          <div class="flex">
            <input type="email" 
                   v-model="email"
                   placeholder="Enter your email" 
                   class="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            <UButton @click="subscribeNewsletter" color="white" variant="solid" class="rounded-l-none px-6 py-3">
              Subscribe
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Captain Dave</h2>
          <p class="text-xl text-gray-600">
            Ready to book your fishing adventure? Get in touch today!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div class="space-y-6">
              <div class="flex items-center">
                <UIcon name="i-heroicons-phone" class="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-900">Phone</p>
                  <a href="tel:631-935-5719" class="text-blue-600 hover:text-blue-800 text-lg">
                    (631) 935-5719
                  </a>
                </div>
              </div>
              
              <div class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@northislandfly.com" class="text-blue-600 hover:text-blue-800">
                    contact@northislandfly.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-900">Location</p>
                  <p class="text-gray-600">Long Island Sound, NY</p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-3">Booking Information</h4>
              <p class="text-gray-700 mb-3">
                Feel free to contact Captain Dave for any questions and booking information. 
                We recommend booking in advance, especially during peak season.
              </p>
              <p class="text-sm text-gray-600">
                Don't forget to sign up for our bi-weekly email list with up-to-date fishing reports!
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <UCard>
              <template #header>
                <h3 class="text-xl font-bold text-gray-900">Send a Message</h3>
              </template>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <UInput v-model="form.name" placeholder="Your Name" required />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <UInput v-model="form.email" type="email" placeholder="your@email.com" required />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <UInput v-model="form.phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Trip Date</label>
                  <UInput v-model="form.date" type="date" />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <UTextarea 
                    v-model="form.message" 
                    placeholder="Tell us about your fishing experience and what you'd like to catch!"
                    rows="5"
                    required 
                  />
                </div>
                
                <UButton type="submit" size="lg" block color="blue">
                  Send Message
                </UButton>
              </form>
              
              <p class="text-xs text-gray-500 mt-4">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">North Island Fly & Light Tackle</h3>
            <p class="text-gray-300 mb-4">
              Professional fly fishing and light tackle guide service on Long Island, NY
            </p>
            <a href="tel:631-935-5719" class="text-blue-400 hover:text-blue-300 font-semibold">
              (631) 935-5719
            </a>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-gray-300 hover:text-white transition-colors">Captain Dave</a></li>
              <li><a href="#fishing" class="text-gray-300 hover:text-white transition-colors">The Fishing</a></li>
              <li><a href="#rates" class="text-gray-300 hover:text-white transition-colors">Rates</a></li>
              <li><a href="#gallery" class="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <UIcon name="i-simple-icons-facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2024 North Island Fly & Light Tackle - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const mobileMenuOpen = ref(false)
const email = ref('')
const form = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  message: ''
})

// Methods
const scrollTo = (target) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const subscribeNewsletter = () => {
  if (email.value) {
    alert('Thank you for subscribing! You will receive our fishing reports soon.')
    email.value = ''
  }
}

const submitForm = () => {
  // In a real application, you would send this to a backend service
  alert('Thank you for your message! Captain Dave will get back to you soon.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  }
}

// Meta tags for SEO
useHead({
  title: 'North Island Fly & Light Tackle - Captain Dave Flanagan | Long Island Fishing Guide',
  meta: [
    {
      name: 'description',
      content: 'Professional fly fishing and light tackle guide service with Captain Dave Flanagan on Long Island, NY. Book your fishing adventure in Long Island Sound today!'
    },
    {
      name: 'keywords',
      content: 'fly fishing, light tackle, fishing guide, Long Island, Captain Dave Flanagan, striped bass, bluefish, fishing charters, Long Island Sound'
    }
  ]
})
</script>

<style scoped>
/* Custom styles for enhanced visual appeal */
.aspect-w-4 {
  position: relative;
  padding-bottom: 125%; /* 4:5 aspect ratio */
}

.aspect-h-5 > img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>