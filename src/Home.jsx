import { 
    TruckIcon, 
    UserGroupIcon, 
    ClipboardDocumentCheckIcon,
    MapPinIcon
  } from '@heroicons/react/24/outline';
  import { Link } from 'react-router-dom';
  import NewFooter from '../components/Footer';
  
  const portalCards = [
    {
      title: 'Track Package',
      description: 'Track your package in real-time with our advanced tracking system',
      icon: MapPinIcon,
      path: '/track',
      color: 'slate'
    },
    {
      title: 'Admin Portal',
      description: 'Manage deliveries, view analytics, and monitor performance',
      icon: ClipboardDocumentCheckIcon,
      path: '/admin',
      color: 'gray'
    },
    {
      title: 'Driver Portal',
      description: 'Update delivery status and manage your assigned deliveries',
      icon: TruckIcon,
      path: '/driver',
      color: 'zinc'
    },
    {
      title: 'Agent Portal',
      description: 'Join our network as a delivery partner and grow your business',
      icon: UserGroupIcon,
      path: '/agent-signup',
      color: 'stone'
    }
  ];
  
  function Home() {
    const getColorClasses = (color) => {
      const classes = {
        slate: 'bg-slate-600 hover:bg-slate-700',
        gray: 'bg-gray-600 hover:bg-gray-700',
        zinc: 'bg-zinc-600 hover:bg-zinc-700',
        stone: 'bg-stone-600 hover:bg-stone-700'
      };
      return classes[color] || classes.slate;
    };
  
    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to N2K Logistics
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted logistics and package tracking solution
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portalCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="transform transition-all duration-200 hover:scale-105"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className={`p-6 ${getColorClasses(card.color)} text-white`}>
                  <card.icon className="h-12 w-12 mx-auto" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
  
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose N2K Logistics?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPinIcon className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Real-time Tracking
              </h3>
              <p className="text-gray-600">
                Get instant updates on your package's location and status
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TruckIcon className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Route Optimization
              </h3>
              <p className="text-gray-600">
                Efficient delivery routes for timely deliveries
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Comprehensive reporting for better decision-making
              </p>
            </div>
          </div>
        </div>
  
        <NewFooter />
      </div>
    );
  }
  
  export default Home;