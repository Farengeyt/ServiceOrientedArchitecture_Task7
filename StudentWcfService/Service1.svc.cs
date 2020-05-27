using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Web;
using System.Web.Hosting;
using System.Web.Script.Services;
using System.Xml.Serialization;

namespace StudentWcfService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {
        public Student[] GetStudentsGraterThan(float mark)
        {
            var pathToFile = HostingEnvironment.MapPath("~/StudentXML.xml");
            XmlSerializer formatter = new XmlSerializer(typeof(Student[]));
            Student[] newpeople;
            using (FileStream fs = new FileStream(pathToFile, FileMode.OpenOrCreate))
            {
                newpeople = (Student[])formatter.Deserialize(fs);
            }
            return newpeople.Where(s => s.AvgMark > mark).ToArray();
        }

        public Student[] GetStudentsLowerThan(float mark)  
        {
            var pathToFile = HostingEnvironment.MapPath("~/StudentXML.xml");
            XmlSerializer formatter = new XmlSerializer(typeof(Student[]));
            Student[] newpeople;
            using (FileStream fs = new FileStream(pathToFile, FileMode.OpenOrCreate))
            {
                newpeople = (Student[])formatter.Deserialize(fs);
            }
            return newpeople.Where(s => s.AvgMark < mark).ToArray();
        }

        public Student[] GetStudentsInRange(float minMark, float maxMark)
        {
            var pathToFile = HostingEnvironment.MapPath("~/StudentXML.xml");
            XmlSerializer formatter = new XmlSerializer(typeof(Student[]));
            Student[] newpeople;
            using (FileStream fs = new FileStream(pathToFile, FileMode.OpenOrCreate))
            {
                newpeople = (Student[])formatter.Deserialize(fs);
            }
            return newpeople.Where(s => s.AvgMark >= minMark && s.AvgMark <= maxMark).ToArray();
        }
    }
}
